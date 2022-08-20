import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  const errors = [];

  if (options.username.length <= 2) {
    errors.push({
      field: "username",
      message: "length must be greater than 2",
    });
  }

  if (options.username.includes("@")) {
    errors.push({
      field: "username",
      message: "username cannot include @ symbol",
    });
  }

  if (!options.email.includes("@")) {
    errors.push({
      field: "email",
      message: "invalid email",
    });
  }

  if (options.password.length <= 3) {
    errors.push({
      field: "password",
      message: "length must be greater than 3",
    });
  }

  return errors;
};
