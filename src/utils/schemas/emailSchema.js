import * as yup from "yup";

const emailSchema = yup.object({
    email: yup.string().email("VALIDATION.EMAIL").required("VALIDATION.EMAIL_REQUIRED"),
});

export default emailSchema;