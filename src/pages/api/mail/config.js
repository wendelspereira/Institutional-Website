import { createTransport } from "nodemailer";

// eslint-disable-next-line import/no-anonymous-default-export
const user = process.env.ZOHO_USER;
const pass = process.env.ZOHO_PASS;

const mailer = () => {
  try {
    const transporter = createTransport({
      host: "smtp.zoho.com",
      port: 465,
      auth: {
        user,
        pass,
      },
    });
    return transporter;
  } catch (err) {
      throw err
  }
};

export default mailer();
