import { body } from "express-validator";

export const loginValidation = [
  body("email", "Incorrect mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Incorrect mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
  body("fullName", "Enter a name").isLength({ min: 3 }),
  body("avatarUrl", "Wrong avatar link").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter the article title").isLength({ min: 3 }).isString(),
  body("text", "Enter the article text").isLength({ min: 10 }).isString(),
  body("tags", "Wrong tag format").optional(),
  body("imageUrl", "Wrong image link").optional().isString(),
];
