import { object, string, number, date, InferType, ref } from 'yup';

const Validation = object({
  email: string().email("Geçerli bir email girin").required("Zorunlu alan"),
  password: string().min(5, "Parolanız en az 5 karakter olmalıdır").required("Zorunlu alan"),
  passwordConfirm: string().oneOf([ref("password")],"Parolalar uyuşmuyor").required("Zorunlu alan"),

});

export default Validation;