import axios from "axios";
import Error from "next/error";

export async function GetLandingPageService({ host }) {
  try {
    const landingPage = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/public/landing-page/get`,
      {
        params: {
          domain: host,
        },
      }
    );

    return landingPage.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
