import * as yup from "yup";

const passwordSchema = yup.object({
    password: yup.string().required("VALIDATION.PASSWORD_REQUIRED").min(8, "VALIDATION.PASSWORD_MIN").max(20, "VALIDATION.PASSWORD_MAX"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "VALIDATION.PASSWORD_DIFF").min(8, "VALIDATION.PASSWORD_MIN").max(20, "VALIDATION.PASSWORD_MAX").required("VALIDATION.CONFIRM_PASSWORD_REQUIRED")
});

export default passwordSchema;