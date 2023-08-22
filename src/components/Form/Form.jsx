import React from "react";
import axios from "axios";
import { Formik } from "formik";

import validationSchema from "../../schemas";

import css from "./Form.module.css";

function Form() {
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/register",

        values,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = response.data;

      alert("Congratulations! Deal and account created");
      resetForm();
      return data;
    } catch (error) {
      const errorResponse = error.response;
      resetForm();
      alert("Ssory! The Deal and account not created");
      return errorResponse;
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{
        dealName: "",
        dealStage: "",
        accountName: "",
        accountWebsite: "",
        accountPhone: "",
      }}
      validateOnBlur
      className={css.form}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isValid,
        handleSubmit,
      }) => (
        <div className={css.wrapper}>
          <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.title}>
              Deal name
              <input
                className={css.textInput}
                placeholder="Вкажіть назву угоди"
                type="text"
                name="dealName"
                value={values.dealName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.dealName && errors.dealName && (
                <p className={css.texterror}>{errors.dealName}</p>
              )}
            </label>
            <label className={css.title}>
              Deal stage
              <input
                className={css.textInput}
                type="text"
                placeholder="Вкажіть етап угоди"
                name="dealStage"
                value={values.dealStage}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.dealStage && touched.dealStage && (
                <p className={css.texterror}>{errors.dealStage}</p>
              )}
            </label>
            <label className={css.title}>
              Account name
              <input
                className={css.textInput}
                type="text"
                placeholder="ПІБ власника угоди"
                name="accountName"
                value={values.accountName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.accountName && touched.accountName && (
                <p className={css.texterror}>{errors.accountName}</p>
              )}
            </label>
            <label className={css.title}>
              Account website
              <input
                className={css.textInput}
                type="text"
                placeholder="Вкаііть e-mail"
                name="accountWebsite"
                value={values.accountWebsite}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.accountWebsite && touched.accountWebsite && (
                <p className={css.texterror}>{errors.accountWebsite}</p>
              )}
            </label>

            <label className={css.title}>
              Account phone
              <input
                className={css.textInput}
                type="tel"
                placeholder="Вкажіть телефон"
                name="accountPhone"
                value={values.accountPhone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.accountPhone && touched.accountPhone && (
                <p className={css.texterror}>{errors.accountPhone}</p>
              )}
            </label>

            <button className={css.button} type="submit" disabled={!isValid}>
              Create a deal and account
            </button>
          </form>
        </div>
      )}
    </Formik>
  );
}

export default Form;
