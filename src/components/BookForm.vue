<template>
  <Form @submit="submitBook" :validation-schema="bookFormSchema">
    <div class="form-group">
      <label for="maSach">Mã sách</label>
      <Field
        name="maSach"
        type="text"
        class="form-control"
        v-model="bookLocal._id"
      />
      <ErrorMessage name="maSach" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="tenSach">Tên sách</label>
      <Field
        name="tenSach"
        type="text"
        class="form-control"
        v-model="bookLocal.tenSach"
      />
      <ErrorMessage name="tenSach" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="donGia">Đơn giá</label>
      <Field
        name="donGia"
        type="number"
        class="form-control"
        v-model="bookLocal.donGia"
      />
      <ErrorMessage name="donGia" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="soQuyen">Số quyển</label>
      <Field
        name="soQuyen"
        type="number"
        class="form-control"
        v-model="bookLocal.soQuyen"
      />
      <ErrorMessage name="soQuyen" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="namXuatBan">Năm xuất bản</label>
      <Field
        name="namXuatBan"
        type="number"
        class="form-control"
        v-model="bookLocal.namXuatBan"
      />
      <ErrorMessage name="namXuatBan" class="error-feedback" />
    </div>
    <div class="form-group">
      <label for="maNxb">Mã nhà xuất bản</label>
      <select
        id="maNxb"
        name="maNxb"
        v-model="bookLocal.maNxb"
        class="form-control"
      >
        <option value="">Chọn mã nhà xuất bản</option>
        <option value="nxb01">An Giang</option>
        <option value="nxb02">Cần Thơ</option>
        <option value="nxb03">Cà Mau</option>
      </select>
      <!-- <ErrorMessage name="maNxb" class="error-feedback" /> -->
    </div>
    <div class="form-group">
      <label for="tacGia">Tác giả</label>
      <Field
        name="tacGia"
        type="text"
        class="form-control"
        v-model="bookLocal.tacGia"
      />
      <ErrorMessage name="tacGia" class="error-feedback" />
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="submitBook">Lưu</button>
      <button
        v-if="bookLocal._id"
        type="button"
        class="ml-2 btn btn-danger"
        @click="deleteBook"
      >
        Xóa
      </button>
    </div>
  </Form>
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:book", "delete:book"],
  props: {
    book: { type: Object, required: true },
  },
  data() {
    const bookFormSchema = yup.object().shape({
      _id: yup
        .string()
        .required("Mã sách không được rỗng.")
        .min(4, "Mã sách phải ít nhất 4 ký tự.")
        .max(10, "Mã sách có nhiều nhất 10 ký tự."),
      tenSach: yup.string().required("Tên sách phải có giá trị."),
      // .min(1, "Tên sách phải ít nhất 1 ký tự.")
      // .max(50, "Tên sách có nhiều nhất 50 ký tự."),
      donGia: yup.string().required("Đơn giá chưa có."),
      soQuyen: yup.string().required("Số quyển chưa có."),
      namXuatBan: yup.string().required("Năm xuất bản chưa có."),
      maNxb: yup.string().required("Mã nhà xuất bản chưa có."),
      tacGia: yup
        .string()
        .required("Tác giả không được rỗng.")
        .max(50, "Tác giả có nhiều nhất 50 ký tự."),
    });
    return {
      // Chúng ta sẽ không muốn hiệu chỉnh props, nên tạo biến cục bộ
      // bookLocal để liên kết với các input trên form
      bookLocal: this.book,
      bookFormSchema,
    };
  },
  methods: {
    submitBook() {
      this.$emit("submit:book", this.bookLocal);
    },
    deleteBook() {
      this.$emit("delete:book", this.bookLocal.id);
    },
  },
};
</script>

<style scoped>
@import "@/assets/form.css";
</style>
