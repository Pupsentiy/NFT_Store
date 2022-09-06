const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,64}$/;
const NAME_REGEXP = /^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/;

export const loginValidation = {
  required: "Email is required",
  maxLength: {
    value: 64,
    message: "Passwords must be no more 64 characters.",
  },
  pattern: {
    value: EMAIL_REGEXP,
    message: "Enter your email",
  },
};

export const passwordValidation = {
  required: "Password is required",
  maxLength: {
    value: 64,
    message: "Passwords must be no more 64 characters.",
  },
  minLength: {
    value: 6,
    message: " Minimum 8 characters required",
  },
  pattern: {
    value: PASSWORD_REGEXP,
    message: "Must be at least one letter and one number",
  },
};

export const nameValidation = {
  required: "Name is required",
  maxLength: {
    value: 20,
    message: "Name must be no more 20 characters",
  },
  pattern: {
    value: NAME_REGEXP,
    message: 'First character must be a letter'
  },
};
