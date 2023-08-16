import * as yup from "yup";

const validationSchema = yup.object().shape({
  dealName: yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Мінімальна кількість символів - 5"),
  dealStage: yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Мінімальна кількість символів - 5"),
  accountName: yup
    .string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Мінімальна кількість символів - 5"),
  accountWebsite: yup
    .string()
    .email()
    .required("Вкажіть email в форматі: qwerty@gmail.com "),
  accountPhone: yup
    .number()
    .integer()
    .required("Вкажіть тел. в форматі: 380501112233"),
});

export default validationSchema;
