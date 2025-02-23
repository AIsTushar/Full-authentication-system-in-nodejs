import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
  testInboxId: 3481040,
});

export const sender = {
  email: "hello@example.com",
  name: "Tushar",
};
