export const contactFormValidation = (values: any) => {
  const errors: any = {};
  const emailError = dataValidation("email", values.email);
  if (emailError) errors.email = emailError;
  //   for (const key in values) {
  //     if (Object.prototype.hasOwnProperty.call(values, key)) {
  //       const el = values[key];
  //       switch (key) {
  //         case "email":
  //           if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(el))
  //             errors[key] = "Invalid email address";
  //           if (!el) errors[key] = "Required email";
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   }
  return errors;
};

export const loginFormValidation = (values: any) => {
    const errors: any = {};
    const emailError = dataValidation("email", values.email);
    if (emailError) errors.email = emailError;
    return errors;
  };

const dataValidation = (type: "email" | "password", value: string) => {
  let error = "";
  switch (type) {
    case "email":
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
        error = "Invalid email address";
      if (!value) error = "Required email";
      break;
    case "password":
      if (value.length < 8) error = "Password length must be greater than 8";
      if (!/[a-z]/.test(value)) error = "Password contain ";
      if (!value) error = "Required email";
      break;
    default:
      break;
  }
  return error;
};
