import axios from "axios";

export async function GetLandingPageService({ host, language }) {
  try {
    const landingPage = await axios.get(
      process.env.NEXT_PUBLIC_NODE_ENV === "development"
        ? "http://localhost:3000/public/landing-page/get"
        : "https://backend-landingpage-admin-dasboard-n2vkrqhb2a-uc.a.run.app/public/landing-page/get",
      {
        params: {
          domain: host,
          language,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return landingPage.data;
  } catch (err) {
    console.log(err);
    throw err.response.data;
  }
}
