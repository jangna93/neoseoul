import Head from "next/head";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer"; // ✅ 푸터도 위로!

export default function Home() {
  return (
    <>
      <Head>
        <title>NEOSEOUL - Fashion Inspired By Seoul</title>
        <meta name="description" content="New Soul, New You - Global Fashion Select Shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <HeroSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer /> {/* ✅ 푸터는 main 바깥, 전체 페이지 맨 아래에 위치 */}
    </>
  );
}
