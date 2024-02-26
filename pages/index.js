import { CreateEmailService } from "@/services/email";
import { GetLandingPageService } from "@/services/landingPage";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import { GoogleAnalytics } from "nextjs-google-analytics";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";
import { event } from "nextjs-google-analytics";

function Index({ landingPage }) {
  const mainLink = landingPage.mainButton;
  const popUnderLink = landingPage.popUpUnder;
  const backLink = landingPage.backClick;
  const router = useRouter();

  function preventDefaultForSubmitButtons() {
    const submitButtons = document.querySelectorAll('button[type="submit"]');
    const emailInput = document.querySelector(
      'input[type="email"][name="email"]'
    );
    const NameInput = document.querySelector('input[type="text"][name="name"]');

    const anchorTags = document.querySelectorAll("a");

    anchorTags.forEach((button) => {
      button.addEventListener("click", function (e) {
        event("click", {
          category: "button-click",
          label: mainLink,
        });
        e.preventDefault();
        handleSumitEmail({ email: "", name: "" });
      });
    });

    submitButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        event("click", {
          category: "button-click",
          label: mainLink,
        });
        e.preventDefault();
        const email = emailInput?.value;
        const name = NameInput?.value;
        handleSumitEmail({ email, name });
      });
    });
  }
  useEffect(() => {
    preventDefaultForSubmitButtons();
  }, []);

  const handleSumitEmail = async ({ email, name }) => {
    try {
      Swal.fire({
        title: "Thanks For Joining us",
        html: "Loading....",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      await CreateEmailService({
        email: email,
        landingPageId: landingPage?.id,
        name,
      });

      if (popUnderLink === "-") {
        window.open(mainLink, "_self");
      } else {
        window.open(mainLink, "_blank	");
        window.open(popUnderLink, "_self");
      }
    } catch (err) {
      if (popUnderLink === "-") {
        window.open(mainLink, "_self");
      } else {
        window.open(mainLink, "_blank	");
        window.open(popUnderLink, "_self");
      }
    }
  };

  return (
    <div>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId={landingPage?.domain?.googleAnalyticsId}
      />

      <Head>
        <meta name="description" content={landingPage.description} />

        {/* facebook sharing link */}
        <meta property="og:title" content={landingPage.title} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={landingPage.description} />
        <meta property="og:image" content={landingPage.backgroundImage} />
        <meta property="og:url" content="https://bestDatingSite.com" />

        {/* tweeter sharing link */}
        <meta name="twitter:title" content={landingPage.title} />
        <meta name="twitter:type" content="website" />
        <meta name="twitter:description" content={landingPage.description} />
        <meta name="twitter:image" content={landingPage.backgroundImage} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href={landingPage.icon} />
        <title>{landingPage.title}</title>
      </Head>
      <main dangerouslySetInnerHTML={{ __html: `${landingPage.html}` }} />
    </div>
  );
}

export default Index;
export const getServerSideProps = async (ctx) => {
  let host = ctx.req.headers.host;
  if (process.env.NEXT_PUBLIC_NODE_ENV === "development") {
    host = "localhost:8181";
  } else {
    host = ctx.req.headers.host;
  }
  const acceptLanguage = ctx.req.headers["accept-language"];
  let userLanguage = acceptLanguage ? acceptLanguage.split(",")[0] : "en";
  userLanguage = userLanguage?.split("-")[0];

  const landingPage = await GetLandingPageService({
    host,
    language: userLanguage,
  });
  return {
    props: {
      landingPage: landingPage,
    },
  };
};
