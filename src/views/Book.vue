<template>
  <div>
    <h4 class="mb-3">
      Danh sách các quyển sách có trong shop
      <i class="fa-solid fa-book"></i>
    </h4>
    <div class="my-3 align-items-center">
      <button class="btn btn-sm btn-success mr-3" @click="goToAddBook">
        <i class="fas fa-plus"></i> Thêm mới
      </button>
      <button class="btn btn-sm btn-danger" @click="removeAllBooks">
        <i class="fas fa-trash"></i> Xóa tất cả
      </button>
    </div>
    <el-table
      :data="tableData"
      @cell-click="handleCellClick"
      style="width: 100%"
    >
      <el-table-column
        prop="_id"
        label="Mã sách"
        sortable
        :sort-method="sortMethod('_id')"
      ></el-table-column>
      <el-table-column
        prop="tenSach"
        label="Tên sách"
        sortable
        :sort-method="sortMethod('tenSach')"
      ></el-table-column>
      <el-table-column
        prop="soQuyen"
        label="Số quyển"
        sortable
        :sort-method="sortMethod('soQuyen')"
      ></el-table-column>
      <el-table-column
        prop="donGia"
        label="Đơn giá"
        sortable
        :sort-method="sortMethod('donGia')"
      ></el-table-column>
      <el-table-column
        prop="namXuatBan"
        label="Năm xuất bản"
        sortable
        :sort-method="sortMethod('namXuatBan')"
      ></el-table-column>
      <el-table-column
        prop="maNxb"
        label="Mã nhà xuất bản"
        sortable
        :sort-method="sortMethod('maNxb')"
      ></el-table-column>
      <el-table-column
        prop="tacGia"
        label="Tác giả"
        sortable
        :sort-method="sortMethod('tacGia')"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import ContactService from "@/services/contact.service";

export default {
  components: {},

  data() {
    return {
      tableData: [],
    };
  },

  mounted() {
    this.retrieveContacts();
  },

  methods: {
    async retrieveContacts() {
      try {
        this.tableData = await ContactService.getAll();
      } catch (error) {
        console.log(error);
      }
    },

    sortMethod(prop) {
      return (a, b) => {
        const aValue = a[prop];
        const bValue = b[prop];
        return aValue === bValue ? 0 : aValue > bValue ? 1 : -1;
      };
    },

    goToAddBook() {
      this.$router.push({ name: "book.add" });
    },

    async removeAllBooks() {
      if (confirm("Bạn muốn xóa tất cả quyển sách?")) {
        try {
          await ContactService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },

    handleCellClick(row) {
      // Đây là nơi bạn xử lý sự kiện click vào ô cụ thể
      console.log("Clicked on cell:", row._id);
      this.$router.push({
        name: "book.edit",
        params: { id: row._id },
      });
    },
  },
};
</script>
