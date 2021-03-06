import { Paper } from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, TextField } from "../../components/AtomComponents";
import { login } from "../../redux/actions/loginActions";
import { loginFormValidation } from "../../utils/dataValidation";
import logo from "../../images/logo.svg";
import "./Login.scss";
function Login(props: any) {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  
  const submitLoginForm = (values: { email: string; password: string }) => {
    localStorage.setItem('email', values.email)
    localStorage.setItem('password', values.password)
    // success email/password
    dispatch(login());
    navigator("/dashboard");
  };

  return (
    <div id="app-login-page">
      <Paper>
        <img src={logo} alt="App Logo" className="app-logo" />
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={loginFormValidation}
          onSubmit={submitLoginForm}
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
                type="password"
                name="password"
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              <PrimaryButton type="submit" disabled={isSubmitting}>
                Submit
              </PrimaryButton>
            </form>
          )}
        </Formik>
      </Paper>
    </div>
  );
}

export default Login;
