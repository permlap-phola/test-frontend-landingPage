import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
const mainLink = "https://www.ds88trk.com/2S1RWKP/7ZRJQL/?sub1=MB";
const popUnderLink = "https://www.ds88trk.com/2S1RWKP/7ZRJQL/?sub1=POP";

function Index() {
  const router = useRouter();

  const handleAffiliateLink = () => {
    window.open(mainLink, "_blank");
    window.open(mainLink, "_parent");
    window.open(mainLink, "_top");
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
          window.open(mainLink, "_blank");
        } else {
          window.open(mainLink, "_blank");
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
    <main
      style={containerStyle}
      className="flex flex-col justify-center items-center h-screen relative "
    >
      <Image
        src={
          "https://clicklovegrow.com/wp-content/uploads/2018/06/Dana-Whitley3.jpg"
        }
        fill
        quality={30}
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAKIAooDASIAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAFhABAQEAAAAAAAAAAAAAAAAAABEB/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APsANsAAAACooAAAAACgAAAAAAACAAIqAAAiKgIAKiKgIioCIqIIi6gIzrTOipqaupqCMtamgyioioioCIqIIioAioiiKgAAAAAACooCooCooACigAoACooAAAAPsANuYAAAACgAAAAAKAAAAAAAAIAAigIACIqAIqCoioCIqAiKiCai6gIy0grKa0zqCamqgMo0iKyioCIqIIKgIiiKgAIKAgAAoAACgAKACoqgqKACgAAAAAA+wA2wACAACoAoAAAACgAAAAAAACCoAACAAiKgoioCIqAiNIDKNIgzqNagM6i6gqIqIMo0gMo0yioioCIqIIjSAiKIqIoCCgIKAgoCKACgACqAKACgAACgAAAAPrgNsAAAAgAKoiiAAAAACgAAAAAAigIACACoACIqAgqAiKiCIqAmoqAmouoKjLSIMo0gMo0iDKNIKyjSIMioCCoKgogiKAgoCKAAKCKAAooCgAKCKAAoCKAAAPrANsAAAAAAAAKAAAIAAAAAKAAAAqAAgqAIqAgAIioCI0iCIqAiKgJqKiKiKgMo0gMo0iDKNIKyKiCI0gIjSAiNIioKAgoCCgIooIKKIooIoACgAAgKAgoAAD6oDTIAoAAAAAAKgCgAAAAAAKAAAAIAAioAigIioCCogiKAiKgIioCIqIqIqAiKAyjSIMo0grKNIgiNIDIoCI0gIKIIKCoKAgooCgIoCAoCKKCCgIoACgIKA+kA0yAAoigAKAAAKAAAAAAAAAAAAoIqAAAgAIAggqAiKAyKgIioKiNIgyjSAyjSAyKiCI0grKNICI0iCI0gIjQDIoCCgIKAgoCKoCCgAKCCgAoCCgIKAAA+iA0yAAKgCgAAAAKKIoAAAAAAAAAACKAgACKAiKAiKAiKgIKgIigrKNIgiKgIjSAyjSIIjSCsigMo0IMo0AyKAiNAMigIKAgoAKAgoCKKCCgIKAAoIKAgoD3gNMgAAACoAoAAAACigAAAAAAAAAAAAAgqAIqAIoCIqAgqCojSIIigMo0gIigMo0iCI0grIoDIoDIogyNICCgIKAyNAIKAgoCCgIoACgIKAgoCKAAoD2ANIKgCiKAAAACgCAACoAoCgAAAAKAgAAACKAgAIKgIKgqCoCCogiNICIoDIqAiNIgiNIKyNIDI0gIjSIIKAyKAgoCCgIKAgoCCgIKACgIKAgoCCgiCgPWAoAAAAKgooACoAoAAAKAAAAqCigAAAIoCACCKCoACCoCCoggqAgqAgqAiNICI0gIjSIIjSCojSAiNAMiiCI0AyKAgoCCgIKCIKAgoCCgIKAAAAqiCgPQACiKAAAAAqAKAooigAAoigAAKigAAAKAACKAgACKAgqIIKgCKAiKAiKAiKAiKAiNIgiNICI0gIKAyKAgqIIKAgoCCgIKAgoCCgIKAgoCCgIKAgoDuAqgAgACiKAACiKAACgKAAKAAACgAAAAAAAAAgqAAAgqAIoCIoCCoCCgMigMiiCIoCI0gIjSAgoCI0gIKAgoggoCCoAAAAAAAAAAAAAADqAKAAogooACoAoAKIoCoCKAAqKoAAKigAAAAAAAAAAIoCCoAigIKgIKAiKAiNICCoggoCIoCI0gIKAiKAgoCCoAiiCCgIKAgoCCgIKAgAACgADoIIqiAKIoAAKIoCoKKACgAKigACKAoKigAAAAAAoAIKAgqAAAIoCCoAigIKgIKAiKAgqIIKAyKAiNICCgIKgIKAgoggACKKIKIIKAgoCCgIKAgoCiAqiKAAAqAKACiKAqKAqCigAoACooAAKAqAACgAAAAAAAACCgIAAigIKgCKAgAIKiAigIACCgIACCgIACCgIAAACCiCCgIKgAAAAAAAiigAAAKIoCoAoAKIoKAAqKoKigKigAAoAAAKAoAAAoiCgIAAAAAAigIKgCKAgqAgogiKAgqAIoCCoCCgIACCgIAAigIKIiAAAAAAAAAAyAjYACiAKAAqCiqgIqoAqoAqoAoCigAoigoigAAoAAAKIqgAIAAAAgoCCoAAAigIAggqAIoCCoAigIACCoAigIKgAAIKiIAAAAgqAAAAAAAwAjYACiAKACiKCiKoKgIqooCooCooCoqgqKAqAKACgAAAKAAAACoAAAAAAIoCCoAiiCAAgoCAAgqAIoCAAgqAAAgqCACCCoAAAACCoAAAADmAjYACiAKACiKCiKCiKCiKooiiKIoKIoKAooAKIoCooAAKAAAAAAAAAAAIAAIoCAAIqAAAgqAAAgAIKgCKAgACKCIAgIqAAAAAIqAAAAA5CCNqIoCoAoigoigoigoigoigoiqKqAiqgCqgCqgCqgooAKAAqKAAAAAAAAAAIACgAiCoAACAAIoCAAgACKgAAIAAioiAAqAAACCAAAAAAADiIMtqIAqoAoiqKIoKIoKIoKIoKrKqKqAKqKIoigoigoigoiqCoAoAKIoAAAAAAAAAAAAgioAACAAIqAAAgAIAAioAAAgICKgAACAAAIAgKIAogDgqDLaiAKIoKIAqoKKqANCKCiKCqyoKqCjQigoiiKACqgCgAoCiiKAACiKAAAAAAAAACCAACKgAACAAioACAAAgACAgAgAACAACAqAAAIAgKIA4AMugqAKICKqAKqAKqCiqgDQigqsqCqgDQiqKrKiKqAKqAKqAKqAKAoogCgAKgCiAKIAqAAAIAgAACAACAAAIACAAgIAIACAqAAIAAgKgAAACAKIA4CDLaiKIKgCqyoKrKgqsqCqgo0IoKrKgqoA0IqiqgCqgIqooKIoKIoCoAoCgACiAKIoAAAgCoAgCAqAACAAAIACAgIACAAIAAgKgACAAgCoICiAKIAogDzgMtKIAoigogDQigoigqsqoqooKrKgqoA0IoKqCiqiiKIoKIoKIoKIAoAKIAogooAAAAICiAAIIqAACAAgKgICAAgAIACAAIACAAICoAAgCoAAICiAOAgy0oigogCqgCqgDQigqsqoqoA0IoKqANCKCqyqiqgDQiiKIoKIoKIAqoAogCiKAAAAoAgKIAAgioAAgACIAICoIACAAgAIACAqCAqAAIAqCIKIAogCiAPOAjSiAKIoKIoKrKgqsqDQigqsqo0IoKrKg0IoKrKgqoKNCKIoigoigogCqgCiAKIAogCiAKIAqAACAAgioACAAIAIACAAggKggKggKggKIIAgCoICiAKIAogDgII0oAKIAqoA0IA0IoKrKg0rKqKqANKyoKqKCqyoKqCjQgDQiiKIoCoAoigogCiAKIAogCiAAICoAAgICAAIACACAAgAggKggKgiCoICoICiAAgCiAqogCiAOQgiqIAqoAqsqCqgCqgDSsqDQiqKrKg0IoKqANCKCqgCqgoqoCNCAKqAKIAoACoAogCoAAICiAAgACAqCAqCAqCAAgAgAIICCUFQqAtQQFQQFQQFEpQVEKCiAKIUHIQRVVlQUQBoQBoRQVUAaEUFVlVGlZUFVFBVZUGhFBVZUFVBRVQEVUAUAFEAUQBQAAABAFEAAQFQQFQQFQQFQQFQQFQRAEAEogKggKglAEoBSoAUQQVBAUQBREBoZpQYEAUQBVQFVUAaEUFVlQVUUFVlVFVFBVQBpWVBoRQVWVBVQUVUBFVlQURQUQBRAFEAUQBRAAEBUEBUAAQAEEBBAVBAVBABEBUEBUqAFEABEQUSpQUqVKC0qUoLUqUoLSpSgtEpQYAAVAFEUFEUFVlQaEUFVBVaVlRFVFBVQFaVlQVUAaEUFEVRRFBRFEUQBRFAVAFEAVAABAVAAEEAQAEABABBAVBABABBAVBABEQVBAVKgBSpSgUqUoFKlKKtKzQFpUAWiAIICKIoKIoKIoKrKgqooKrKqNKyoKqKCqgDQigqoA0IoqiKqKIoKIoCoAogCgAAACAKIIAICoICoICoIAIAIACCACACCIAiAqCACIC1KIKtSoUFRKVBalQBaVEBaJSgolKCiCooigogDQigqsqCqigqsqo0rKgqooKqANCKCqgDQiqKIoKIoKIAqoAogCiKAIIKIAqAAIACACAAggKggAggIIAggKggCCACAoglBUqCAIlBRKgLSogLRKUFGaUVorNKDYgrKiKAqAKqKCiKCqiqKqANCKCqigqooKrKgqooKIqiiKCiKCiKAqAKIAoggogCoAAIACAqCAAgAIAgiCoIAggAgAggoggCCIKglASiAqCAqVBFWpUAWpUpQWlQBaVkB1EGmFEUVRFBRFBRFUVUUFVFBVZUGlZUGhFBVRQURQUBRVQBQAUABUAURUAAAQBUAAEABAAQAEQEAEBAEEARUAQQUQRAQQBBAAQBBEVUQAEQFQSgogC1KgC0qAOwitMAAKIoKrKiqqKoqsqDQigqooKqKCqgCqigqoAqoqgqKAqKAqAKIqAAAAAAAIAAgAAICAIqICCAIqAIIAggogIIioCIqAgIAgiKIIACAIICoIiqIACAKIA7gNuYqKAqAKqKCiKqqqKCqigqoA0IoKqKCqigoigoCigAoAKIoACCiAKIAAAAAgACAAgiAioAgAiKgCCCiCICACIqAiKgIioggIKIIAgiACCgIACAqAgCAPSA6OYACgAoAKqKqqqANKyoKqKCqigqooKACqigKiqKACiKAqCCgAAAAAAAIAAIAACIqICACIqAIAIioKiKiCIqAiKgIipqCIqCoCAIIgIAICCiKiACAAACAPUA6OYACgAoCiqAKAKqgCqAKoAqgCgAqgAoKKAAoAAIKAAAAAAACAAIACAAgIIACIAIgCiAgiACIAIgAiAgiAKiACICCIACAKgCCAAIAAAP/9k="
        placeholder="blur"
        className="object-cover"
        sizes="(max-width: 768px) 100vw"
      />
      <Head>
        <meta
          name="description"
          content="Discover love and meaningful connections on our dating website.
          Join a community of like-minded singles searching for romance, friendship, and more.
          Sign up today and find your perfect match!"
        />
        <meta
          name="keywords"
          content="Online dating
          Dating website
          Find love online
          Meet singles
          Romantic connections
          Meaningful relationships
          Dating app
          Love and dating
          Relationship advice
          Dating community
          Matchmaking service
          Singles near me
          Dating tips
          Local dating
          Online romance
          Dating profiles
          Dating chat
          Dating for seniors
          LGBTQ+ dating
          Christian dating
          Jewish dating
          Asian dating
          Interracial dating
          Niche dating
          Safe online dating
          Verified profiles
          Free registration
          Online flirting
          Dating success stories
          Compatible matches"
        />
        {/* facebook sharing link */}
        <meta property="og:title" content="The best dating site" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Discover love and meaningful connections on our dating website.
          Join a community of like-minded singles searching for romance, friendship, and more.
          Sign up today and find your perfect match!"
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/tatugacamp.com/thumnail/landingPage.png"
        />
        <meta property="og:url" content="https://bestDatingSite.com" />

        {/* tweeter sharing link */}
        <meta property="twitter:title" content="The best dating site" />
        <meta property="twitter:type" content="website" />
        <meta
          property="twitter:description"
          content="Discover love and meaningful connections on our dating website.
          Join a community of like-minded singles searching for romance, friendship, and more.
          Sign up today and find your perfect match!"
        />
        <meta
          property="twitter:image"
          content="https://storage.googleapis.com/tatugacamp.com/thumnail/landingPage.png"
        />
        <meta property="twitter:url" content="https://bestDatingSite.com" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>the best dating site</title>
      </Head>
      <header
        className="font-Poppins h-96 md:h-96  backdrop-blur-sm md:py-20 bg-black/10 w-full
       text-center  flex flex-col justify-center items-center gap-5 font-medium text-white"
      >
        <h1 className="text-5xl">💗Ourtime</h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "#1 dating site for singles over 50",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "#1 dating site for busy professionals.",
            1000,
            "#1 dating site for adventurous hearts.",
            1000,
            "#1 dating site for local connections.",
            1000,
            "#1 dating site for senior companionship.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1.5em", display: "inline-block" }}
          repeat={Infinity}
        />

        <button
          onClick={handleAffiliateLink}
          className="w-max lg:mt-20 px-20 hover:scale-110 bg-white py-2 text-base hover:ring-2 transition duration-150
         ring-pink-200 font-medium text-pink-500 rounded-full"
        >
          view singles
        </button>
      </header>
      <footer className="mt-5 flex justify-center w-full">
        <ul
          className="md:w-max font-Poppins text-white place-items-center  
        w-full md:max-w-3xl grid grid-cols-3"
        >
          {footerData.map((list, index) => {
            return (
              <li
                onClick={handleAffiliateLink}
                className=" w-max select-none text-center hover:scale-105 transition duration-150 hover:underline cursor-pointer "
                key={index}
              >
                {list.title}
              </li>
            );
          })}
        </ul>
      </footer>
    </main>
  );
}

export default Index;
