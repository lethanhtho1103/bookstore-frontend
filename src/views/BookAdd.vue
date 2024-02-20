<template>
  <div v-if="book" class="page">
    <h4>Thêm sách</h4>
    <p class="success">{{ message }}</p>
    <BookForm :book="book" @submit:book="addBook" />
  </div>
</template>

<script>
import BookForm from "@/components/BookForm.vue";
import contactService from "@/services/contact.service";

export default {
  components: {
    BookForm,
  },
  data() {
    return {
      book: {},
      message: "",
    };
  },
  methods: {
    async addBook(data) {
      try {
        await contactService.create(data);
        this.message = "Thêm sách mới thành công.";
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {},
};
</script>

<style scoped>
.success {
  color: #28a745;
  font-size: 17px;
}
</style>
