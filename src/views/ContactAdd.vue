<template>
  <div v-if="book" class="page">
    <h4>Thêm liên hệ</h4>
    <BookForm :book="book" @submit:book="addBook" />
    <p>{{ message }}</p>
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
        this.message = "Thêm liên hệ mới thành công.";
        console.log(this.message);
      } catch (error) {
        console.log(error);
      }
    },
  },

  created() {},
};
</script>
