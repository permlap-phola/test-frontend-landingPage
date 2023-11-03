import { CreateEmailService } from "@/services/email";
import { GetLandingPageService } from "@/services/landingPage";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Swal from "sweetalert2";

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

    submitButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        const email = emailInput.value;
        handleSumitEmail({ email });
      });
    });
  }
  useEffect(() => {
    preventDefaultForSubmitButtons();
  }, []);

  const handleSumitEmail = async ({ email }) => {
    try {
      await CreateEmailService({ email: email, landingPageId: landingPage.id });
      window.open(mainLink, "_self");
    } catch (err) {
      window.open(mainLink, "_self");
    }
  };

  return (
    <div>
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
  const host = ctx.req.headers.host;
  const landingPage = await GetLandingPageService({ host });
  return {
    props: {
      landingPage: landingPage,
    },
  };
};
