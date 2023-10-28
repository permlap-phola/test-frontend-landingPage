import { GetLandingPageService } from "@/services/landingPage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function Index({ landingPage }) {
  const mainLink = landingPage.mainButton;
  const popUnderLink = landingPage.popUpUnder;
  const backLink = landingPage.backClick;
  const router = useRouter();

  const handleAffiliateLink = () => {
    openNewBackgroundTab();
  };

  useEffect(() => {
    const delay = 1000; // 2 seconds
    const timer = setTimeout(() => {
      window.open(mainLink, "_blank");
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      console.log("hi");
      window.history.go(1);
    };
  }, []);

  function openNewBackgroundTab() {
    window.open("/welcome", "_blank");
    window.open(popUnderLink, "_self");
  }

  return (
    <div>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${landingPage?.googleAnalyticsId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >{` window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${landingPage?.googleAnalyticsId}');`}</Script>

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
      <main
        onClick={handleAffiliateLink}
        dangerouslySetInnerHTML={{ __html: `${landingPage.html}` }}
      />
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
