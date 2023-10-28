import axios from "axios";
import Error from "next/error";

export async function GetLandingPageService({ host }) {
  try {
    const landingPage = await axios.get(
      `https://backend-landingpage-admin-dasboard-n2vkrqhb2a-uc.a.run.app/public/landing-page/get`,
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
