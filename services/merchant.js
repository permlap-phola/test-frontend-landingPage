import axios from "axios";

export async function DirectLinkService({ email, url }) {
  try {
    const ip = await axios({
      method: "GET",
      url: "https://api.ipify.org?format=json",
    });
    console.log(ip.data.ip);
    const response = await axios({
      method: "POST",
      url: url,
      data: {
        email: email,
        apiKey:
          "a1h6p7zy5p400vsfcklh35li1vbhixpueepvf4p4k32cn3xeai37knrzurs0exjz",
        sexual_orientation: "hetero",
        gender: "male",
        dob: "1999-03-11",
        ip: "98.207.254.136",
        ua: window.navigator.userAgent,
      },
      params: {
        tds_compaign: "s0094bel",
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.location);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err.response.data;
  }
}
