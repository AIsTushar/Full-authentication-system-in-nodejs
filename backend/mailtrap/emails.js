import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationCode) => {
  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.testing.send({
      from: sender,
      to: recipients,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationCode
      ),
      category: "Email Verification",
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send verification email");
  }
};

export const sendWelcomeEmail = async (email, username) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.testing.send({
      from: sender,
      to: recipients,
      subject: "Welcome to Our App",
      html: WELCOME_EMAIL_TEMPLATE.replace("{name}", username),
      category: "Welcome Email",
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send welcome email");
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipients = [{ email }];

  try {
    const response = await mailtrapClient.testing.send({
      from: sender,
      to: recipients,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset Email",
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send Password reset email");
  }
};

export const sendPasswordResetSuccessEmail = async (email) => {
  const recipients = [{ email }];
  try {
    const response = await mailtrapClient.testing.send({
      from: sender,
      to: recipients,
      subject: "Your Password has been reset",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset Success Email",
    });

    console.log("Email sent successfully:", response);
  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send Password reset email");
  }
};
