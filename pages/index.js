import { GetLandingPageService } from "@/services/landingPage";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Script from "next/script";
import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const backgroundImageUrl =
  "https://clicklovegrow.com/wp-content/uploads/2018/06/Dana-Whitley3.jpg"; // Replace with your image URL

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: "cover", // You can customize these styles as needed
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  // Other CSS properties can be added here
};

function Index({ landingPage }) {
  const mainLink = landingPage.mainButton;
  const popUnderLink = landingPage.popUpUnder;
  const backLink = landingPage.backClick;
  const router = useRouter();
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const handleAffiliateLink = () => {
    router.push("/welcome");
    window.open(mainLink, "_blank");
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
      console.log("hi");
      window.history.go(1);
    };
  }, []);

  return (
    <Link
      onClick={handleAffiliateLink}
      href={mainLink}
      target="_blank"
      style={containerStyle}
    >
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
        <title>{landingPage.title}</title>
      </Head>
      <div dangerouslySetInnerHTML={{ __html: `${landingPage.html}` }} />
    </Link>
  );
}

export default Index;

export const getServerSideProps = async (ctx) => {
  const host = ctx.req.headers.host;
  console.log(host);
  const landingPage = await GetLandingPageService({ host });

  return {
    props: {
      landingPage: landingPage,
    },
  };
};
