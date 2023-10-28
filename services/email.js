import axios from "axios";
import Error from "next/error";

export async function CreateEmailService({ email, landingPageId }) {
  try {
    const res = await axios.post(
      `http://localhost:3000/public/email/collect`,
      {
        email,
        landingPageId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
