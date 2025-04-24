import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEOSEOUL - Inspired By Seoul</title>
        <meta name="description" content="New Soul, New You - Global Fashion Select Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}

import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      {/... HeroSection, About, Contact 등/}
      <Footer />
    </>
  );
}
