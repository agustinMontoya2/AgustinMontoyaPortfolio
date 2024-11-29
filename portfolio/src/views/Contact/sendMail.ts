import { Resend } from "resend";

const resend = new Resend("re_jMBcPdWt_7oXtfFqPWsUadEfeffU6o7EQ");

export async function sendMail() {
  const data = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["agus7montoya@gmail.com"],
    subject: "Hello World",
    html: "<strong>It works!</strong>",
  });
  console.log(data);
  //   console.log("enviado");
}
