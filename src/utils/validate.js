export const checkValidData = (email, password, name) => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const errors = {};

  if (!name) {
    errors.name = {
      type: "invalidName",
      message: "Please enter your full name.",
    };
  }

  if (!emailPattern.test(email)) {
    errors.email = {
      type: "invalidEmail",
      message: "Please enter a valid email address.",
    };
  }

  if (!passwordPattern.test(password)) {
    errors.password = {
      type: "invalidPassword",
      message:
        "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.",
    };
  }

  return errors;
};
