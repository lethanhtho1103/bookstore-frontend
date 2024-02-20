<template>
  <div v-if="book" class="page">
    <h4>Hiệu chỉnh sách</h4>
    <p class="success">{{ message }}</p>
    <BookForm
      :book="book"
      @submit:book="updateBook"
      @delete:book="deleteBook"
    />
  </div>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    BookForm,
  },
  props: {
    id: { type: String, required: true },
  },

  data() {
    return {
      book: null,
      message: "",
    };
  },
  methods: {
    async getBook(id) {
      try {
        this.book = await ContactService.get(id);
      } catch (error) {
        console.log(error);
        // Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
        this.$router.push({
          name: "notfound",
          params: {
            pathMatch: this.$route.path.split("/").slice(1),
          },
          query: this.$route.query,
          hash: this.$route.hash,
        });
      }
    },
    async updateBook(data) {
      try {
        await ContactService.update(this.book._id, data);
        this.message = "Sách được cập nhật thành công.";
      } catch (error) {
        console.log(error);
      }
    },
    async deleteBook() {
      if (confirm("Bạn muốn xóa sách này?")) {
        try {
          await ContactService.delete(this.book._id);
          this.$router.push({ name: "contactbook" });
        } catch (error) {
          console.log(error);
        }
      }
    },
  },

  created() {
    this.getBook(this.id);
    this.message = "";
  },
};
</script>

<style scoped>
.success {
  color: #28a745;
  font-size: 17px;
}
</style>
