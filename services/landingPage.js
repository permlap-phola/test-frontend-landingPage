import axios from "axios";
import Error from "next/error";

export async function GetLandingPageService() {
  try {
    const landingPage = await axios.get(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/public/landing-page/get`,
      {
        params: {
          domain: process.env.NEXT_PUBLIC_DOMAIN_NAME,
        },
      }
    );

    return landingPage.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
