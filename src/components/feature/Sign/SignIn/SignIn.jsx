import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { List } from "@components/common";
import { useAction } from "@helpers/hooks";
import * as Yup from "yup";
import axios from "axios"; 
import { obtainToken } from "@store/actions/authAction";
import "../SignBox/SignBox.scss";

export default function SignIn() {
  const { obtainToken } = useAction();
  const SIGN_IN = [
    {
      id: 1,
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      id: 2,
      label: "Password",
      name: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const handleSubmit = async (values) => {
    try {
      const data = {
        email: values.email,
        password: values.password,
      }
      await obtainToken(data);
      // await obtainToken({ email: values.email, password: values.password });
      // const response = await axios.post("https://drongo.pythonanywhere.com/obtain-token/", {
      //   email: values.email,
      //   password: values.password,
      // });

      // localStorage.setItem("access_token", response.data.access);

      // console.log("Login successful:", response.data);
      // You can navigate to another page or update the state as needed
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
         <Form className="sign__form">
          <List
            className="sign__group-fields"
            items={SIGN_IN}
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
         <button className="sign__button" type="submit">Sign In</button>
        </Form>
      )}
    </Formik>
  );
}
