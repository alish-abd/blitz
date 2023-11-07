import React from "react";
import { Formik, Form, Field } from "formik";
import "./WritingTestInput.scss";

export default function WritingTestInput() {
  return (
      <Formik
        initialValues={{ message: "" }}
        onSubmit={(values) => {
          console.log("Submitted values:", values);
        }}
      >
        {({ values }) => {
          // Calculate word count
          const wordCount = values.message.trim().split(/\s+/).filter(Boolean).length;

          return (
            <Form className="writing__form">
              <Field
                as="textarea"
                name="message"
                id="message"
                className="writing__input"
                placeholder="Start typing your essay here"
              />
              <div className="writing__word-count">Word Count: {wordCount}</div>
            </Form>
          );
        }}
      </Formik>
  );
}
