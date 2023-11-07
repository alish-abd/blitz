import * as yup from "yup";

const updatePasswordSchema = yup.object({
    currentPassword: yup.string().min(8, "VALIDATION.PASSWORD_MIN").max(20, "VALIDATION.PASSWORD_MAX").required("VALIDATION.CURRENT_PASSWORD_REQUIRED"),
    password: yup.string().min(8, "VALIDATION.PASSWORD_MIN").max(20, "VALIDATION.PASSWORD_MAX").required("VALIDATION.PASSWORD_REQUIRED"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "VALIDATION.PASSWORD_DIFF").min(8, "VALIDATION.PASSWORD_MIN").max(20, "VALIDATION.PASSWORD_MAX").required("VALIDATION.CONFIRM_PASSWORD_REQUIRED")
});

export default updatePasswordSchema;