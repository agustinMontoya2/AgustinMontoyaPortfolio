import { mailInterface } from "../../interfaces/mailInterface";

const APIURL = import.meta.env.VITE_API_URL;

export async function sendMail(email: mailInterface) {
  const data = await fetch(`${APIURL}/email`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(email),
  });

  const json = await data.json();

  if (json.error) {
    throw json;
  }
  return json;
}
