import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"; 
import { List } from "@components/common";
import "../SignBox/SignBox.scss";

export default function SignUp() {
  const SIGN_UP = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
        id: 2,
        label: "Phone",
        name: "phone",
        type: "phone",
        placeholder: "Enter your phone",
      },
      {
        id: 3,
        label: "First name",
        name: "first_name",
        type: "first_name",
        placeholder: "Enter your first name",
      },
      {
        id: 4,
        label: "Last name",
        name: "last_name",
        type: "last_name",
        placeholder: "Enter your last name",
      },
    {
      id: 5,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
    {
      id: 6,
      label: "Confirm password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your email",
    },
  ];

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("https://drongo.pythonanywhere.com/register/", {
        email: values.email,
        phone: values.phone,
        first_name: values.first_name,
        last_name: values.last_name,
        password: values.password,
        password_confirm: values.confirmPassword,  // Using confirmPassword here to match your Formik setup
      });

      // Handle successful registration, e.g., redirect, show success message, etc.
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle error
      if (error.response) {
        console.error("Server error:", error.response.data);
      } else {
        console.error("Error registering:", error);
      }
    }
  };

  return (
    <Formik
      initialValues={{ 
        email: "", 
        phone: "", 
        first_name: "", 
        last_name: "", 
        password: "", 
        confirmPassword: "" 
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        phone: Yup.string().required("Required"),
        first_name: Yup.string().required("Required"),
        last_name: Yup.string().required("Required"),
        password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="sign__form">
          <List
            className="sign__group-fields"
            items={SIGN_UP}
            renderItem={(item) => {
              const error = touched[item.name] && errors[item.name];
              return (
                <div key={item.id} className="sign__group-field">
                  {/* <label className="sign__label">{item.label}</label> */}
                  <Field
                    type={item.type}
                    name={item.name}
                    className="sign__field"
                    placeholder={item.placeholder}
                  />
                  {error && <div className="sign__field-error">{error}</div>}
                </div>
              );
            }}
          />
          <button className="sign__button" type="submit">
            Sign Up
          </button>
        </Form>
      )}
    </Formik>
  );
}
