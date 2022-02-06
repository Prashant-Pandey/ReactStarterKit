import { Formik } from "formik";
import { PrimaryButton, TextField } from "../../components/AtomComponents";
import { contactFormValidation } from "../../utils/dataValidation";
import "./Contact.scss"

function Contact() {
  return (
    <div role="main" id="app-contact-form-page">
      <Formik
        initialValues={{ email: "", name: "", message: "" }}
        validate={contactFormValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="app-contact-form" onSubmit={handleSubmit}>
            <TextField
              type="email"
              name="email"
              label="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              error={!!errors.email && !!touched.email && !!errors.email}
              helperText={errors.email && touched.email && errors.email}
            />

            <TextField
              type="text"
              name="name"
              label="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />

            <TextField
              type="text"
              name="message"
              label="Message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
            <PrimaryButton type="submit" disabled={isSubmitting}>
              Submit
            </PrimaryButton>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
