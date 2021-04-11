export default function registerValidate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  }
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.cpassword) {
    errors.cpassword = "Confirm Password is required";
  } else if (values.password != values.cpassword) {
    errors.cpassword = "Password & Confirm Password is not match";
  }
  if (!values.contact) {
    errors.contact = "Phone number is required";
  } else if (values.contact.length != 10) {
    errors.contact = "Enter Valid Phone Number";
  }
  return errors;
}
