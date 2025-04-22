import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>NEO SEOUL</title>
        <meta name="description" content="New Soul, New You - 글로벌 패션 셀렉트샵" />
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
