import { GetLandingPageService } from "@/services/landingPage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const backgroundImageUrl =
  "https://clicklovegrow.com/wp-content/uploads/2018/06/Dana-Whitley3.jpg"; // Replace with your image URL

function Index({ landingPage }) {
  const mainLink = landingPage.mainButton;
  const popUnderLink = landingPage.popUpUnder;
  const backLink = landingPage.backClick;
  const router = useRouter();

  const handleAffiliateLink = () => {
    window.open(mainLink, "_blank");
    window.open(mainLink, "_parent");

    window.open(popUnderLink, "_self");
  };
  const footerData = [
    { title: "terms" },
    { title: "privacy" },
    { title: "safety tips" },
  ];
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
      window.history.go(1);
    };
  }, []);

  const browserTabcloseHandler = (e) => {
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = "";
  };

  useEffect(() => {
    if (window) {
      router.beforePopState(() => {
        const result = window.confirm("are you sure you want to leave?");
        if (!result) {
          //   window.history.pushState("/", "");
          window.open(backLink, "_blank");
        } else {
          window.open(backLink, "_blank");
        }
        return result;
      });
      window.onbeforeunload = browserTabcloseHandler;
    }
    //Router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      if (window) {
        window.onbeforeunload = null;
      }
      router.beforePopState(() => {
        return true;
      });
    };
  }, []); // this fixed the issue

  return (
    <main onClick={handleAffiliateLink}>
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
        <title>{landingPage.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: `${landingPage.html}` }} />
    </main>
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
