import { Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PrimaryButton, TertiaryButton } from "../../components/AtomComponents";
import LoadingDialog from "../../components/AtomComponents/LoadingDialog";
function Login(props: any) {
  const { configState, actions } = props;

  const [popoverTarget, setPopOverTarget] = useState<any>(null);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [loginFlowState, setLoginFlowState] = useState<any>({
    email: "",
    password: "",
    newPassword: "",
  });

  const [newPswdState, setNewPswdState] = useState({
    upperCase: false,
    lowerCase: false,
    minLength: false,
    number: false,
    specialCharacter: false,
  });

  const [isSetNewPasswordView, setIsSetNewPasswordView] =
    useState<boolean>(false);

  const [errorState, setErrorState] = useState<any>({});

  const errorValidation = (name: string, value: string, type: string) => {
    if (value === "") return;

    const errorData: any = { ...errorState };

    // const requiredRes = fieldValidation(value, type);

    // if (requiredRes) {
    //   errorData[name] = requiredRes;
    // } else {
    //   delete errorData[name];
    // }

    setErrorState(errorData);
  };

  const onChangeState = (e: any) => {
    setLoginFlowState({ ...loginFlowState, [e.target.name]: e.target.value });
    setErrorState({ ...errorState, [e.target.name]: "" });

    if (e.target.name === "newPassword" && e.target.value) {
      const isLowerCase = /[a-z]/.test(e.target.value);
      const isUpperCase = /[A-Z]/.test(e.target.value);
      const isMinLength = e.target.value.length >= 8;
      const isNumber = /[0-9]/.test(e.target.value);
      const isSpecialCharacter = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(
        e.target.value
      );

      setPopOverTarget(e.target);
      setNewPswdState({
        lowerCase: isLowerCase,
        upperCase: isUpperCase,
        minLength: isMinLength,
        number: isNumber,
        specialCharacter: isSpecialCharacter,
      });
    } else setPopOverTarget(null);
  };

  async function signIn(e: any) {
    e.preventDefault();
    try {
      if (!loginFlowState["email"]) {
        // openSnackBar("Username cannot be empty", "error");
        return;
      }
      if (!loginFlowState["password"]) {
        // openSnackBar("Password cannot be empty", "error");
        return;
      }

      // setIsLoading(true);
      // const user = await Auth.signIn(
      //   loginFlowState["email"],
      //   loginFlowState["password"]
      // );
      // if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
      //   setIsSetNewPasswordView(true);
      //   setIsLoading(false); // preventing memory leak
      //   setUser(user);
      // } else {
      //   setIsLoading(false); // preventing memory leak
      //   actions.setUserAndFetchAuthorities(user);
      // }
    } catch (error: any) {
      console.log("error signing in", error);
      // openSnackBar(error.message, "error");
      setIsLoading(false);
    }
  }

  const goToSignInPage = () => {
    setIsSetNewPasswordView(false);
    setLoginFlowState({
      ...loginFlowState,
      newPassword: "",
      email: "",
      password: "",
    });
  };

  const onCompleteNewPassword = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      // const userObj = await Auth.completeNewPassword(
      //   user,
      //   loginFlowState["newPassword"],
      //   {
      //     email: loginFlowState["email"],
      //   }
      // );
      setIsLoading(false);
      // actions.setUserAndFetchAuthorities(userObj);
    } catch (error: any) {
      console.log("error completing the password", error);
      // openSnackBar(error.message, "error");
      setIsLoading(false);
    }
  };

  return (
    <Paper elevation={3} className="px-reset-password">
      <form>
        <div className="cell small-12 margin-bottom-1">
          <img
            className="login-logo"
            src={configState?.userPoolLogo}
            alt="Logo"
          />
          <h3>Sign in to your account</h3>
          <div className="form-fields m-b-px-2 margin-top-1 grid-x">
            {!isSetNewPasswordView ? (
              <>
                <div className="cell grid-x small-12 margin-bottom-1">
                  <label className="cell small-12 margin-bottom-1 px-text-description">
                    Email Address
                  </label>
                  <TextField
                    onChange={onChangeState}
                    onBlur={(e) =>
                      errorValidation(e.target.name, e.target.value, "email")
                    }
                    name="email"
                    value={loginFlowState["email"]}
                    type="email"
                    error={errorState?.email ? true : false}
                    helperText={errorState?.email}
                    placeholder={"Enter Email"}
                    required
                    fullWidth
                  />
                </div>
                <div className="cell small-12 grid-x margin-bottom-1">
                  <label className="cell small-12 margin-bottom-1 px-text-description">
                    Password
                  </label>
                  <TextField
                    onChange={onChangeState}
                    name="password"
                    type="password"
                    value={loginFlowState["password"]}
                    error={errorState?.verificationCode ? true : false}
                    helperText={errorState?.verificationCode}
                    placeholder={"Enter Password"}
                    required
                    fullWidth
                  />
                </div>
              </>
            ) : (
              <div className="cell small-12 grid-x margin-bottom-1">
                <label className="cell small-12 margin-bottom-1 px-text-description">
                  New Password
                </label>
                <TextField
                  onChange={onChangeState}
                  name="newPassword"
                  type="password"
                  value={loginFlowState["newPassword"]}
                  error={errorState?.newPassword ? true : false}
                  helperText={errorState?.newPassword}
                  placeholder={"Enter New Password"}
                  required
                  fullWidth
                />
              </div>
            )}
          </div>
          <label className="px-text-description px-reset-pswd-text">
            Forgot your password
          </label>
          <Link to="/reset-password" className="px-reset-pswd-text">
            &nbsp;{"Reset Password"}&nbsp;
          </Link>
          <PrimaryButton
            className="cell small-12 margin-top-1"
            type="submit"
            onClick={signIn}
          >
            SIGN IN
          </PrimaryButton>
          <div className="cell small-12 margin-bottom-1 t margin-top-1 text-right">
            <TertiaryButton onClick={goToSignInPage} className="margin-right-2">
              BACK To SIGN IN
            </TertiaryButton>
            <PrimaryButton
              onClick={onCompleteNewPassword}
              type="submit"
              disabled={
                !newPswdState["lowerCase"] ||
                !newPswdState["upperCase"] ||
                !newPswdState["minLength"] ||
                !newPswdState["number"] ||
                !newPswdState["specialCharacter"]
              }
            >
              CHANGE
            </PrimaryButton>
          </div>
        </div>
      </form>
      {/* {popoverTarget && (
        <PasswordPolicyPopover
          target={popoverTarget}
          pswdState={newPswdState}
          onClose={(e: any) => {
            setPopOverTarget(null);
          }}
        />
      )} */}
      <LoadingDialog isDialogOpen={isLoading} />
    </Paper>
  );
}

export default Login;
