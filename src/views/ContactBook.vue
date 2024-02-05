<!-- <template>
  <div class="page row mx-auto">
    <div class="col-md-10"><InputSearch v-model="searchText" /></div>
    <div class="mt-3 col-md-6">
      <h4>
        Danh bạ
        <i class="fas fa-address-book"></i>
      </h4>
      <ContactList
        v-if="filteredContactsCount > 0"
        :contacts="filteredContacts"
        v-model:activeIndex="activeIndex"
      />
      <p v-else>Không có liên hệ nào.</p>
      <div class="mt-3 row justify-content-around align-items-center">
        <button class="btn btn-sm btn-primary" @click="refreshList()">
          <i class="fas fa-redo"></i> Làm mới
        </button>
        <button class="btn btn-sm btn-success" @click="goToAddContact">
          <i class="fas fa-plus"></i> Thêm mới
        </button>
        <button class="btn btn-sm btn-danger" @click="removeAllContacts">
          <i class="fas fa-trash"></i> Xóa tất cả
        </button>
      </div>
    </div>
    <div class="mt-3 col-md-6">
      <div v-if="activeContact">
        <h4>
          Chi tiết Liên hệ
          <i class="fas fa-address-card"></i>
        </h4>
        <ContactCard :contact="activeContact" />
        <router-link
          :to="{
            name: 'contact.edit',
            params: { id: activeContact._id },
          }"
        >
          <span class="mt-2 badge badge-warning">
            <i class="fas fa-edit"></i> Hiệu chỉnh</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactCard.vue";
import InputSearch from "@/components/InputSearch.vue";
import ContactList from "@/components/ContactList.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    ContactCard,
    InputSearch,
    ContactList,
  },
  // Đoạn mã xử lý đầy đủ sẽ trình bày bên dưới
  data() {
    return {
      contacts: [],
      activeIndex: -1,
      searchText: "",
    };
  },
  watch: {
    // Giám sát các thay đổi của biến searchText.
    // Bỏ chọn phần tử đang được chọn trong danh sách.
    searchText() {
      this.activeIndex = -1;
    },
  },
  computed: {
    // Chuyển các đối tượng contact thành chuỗi để tiện cho tìm kiếm.
    contactStrings() {
      return this.contacts.map((contact) => {
        const { maSach, tenSach, donGia, maNxb } = contact;
        return [maSach, tenSach, donGia, maNxb].join("");
      });
    },
    // Trả về các contact có chứa thông tin cần tìm kiếm.
    filteredContacts() {
      if (!this.searchText) return this.contacts;
      return this.contacts.filter((_contact, index) =>
        this.contactStrings[index].includes(this.searchText)
      );
    },
    activeContact() {
      if (this.activeIndex < 0) return null;
      return this.filteredContacts[this.activeIndex];
    },
    filteredContactsCount() {
      return this.filteredContacts.length;
    },
  },
  methods: {
    async retrieveContacts() {
      try {
        this.contacts = await ContactService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    refreshList() {
      this.retrieveContacts();
      this.activeIndex = -1;
    },

    async removeAllContacts() {
      if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
        try {
          await ContactService.deleteAll();
          this.refreshList();
        } catch (error) {
          console.log(error);
        }
      }
    },

    goToAddContact() {
      this.$router.push({ name: "contact.add" });
    },
  },
  mounted() {
    this.refreshList();
  },
};
</script>
<style scoped>
.page {
  text-align: left;
  max-width: 750px;
}
</style> -->
<template>
  <div>
    <h4 class="mb-3">
      Danh sách các quyển sách có trong shop
      <i class="fa-solid fa-book"></i>
    </h4>

    <el-table :data="tableData" style="width: 100%">
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
    // sort(prop, order) {
    //   // Thực hiện sự kiện sắp xếp
    //   const sortOrders = order === "ascending" ? 1 : -1;
    //   this.tableData.sort((a, b) => {
    //     const aValue = a[prop];
    //     const bValue = b[prop];
    //     return sortOrders * (aValue === bValue ? 0 : aValue > bValue ? 1 : -1);
    //   });
    // },
  },
};
</script>
