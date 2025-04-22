import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}></div>
      <h1>NEOSEOUL</h1>
      <p><span>New Soul, New You</span></p>
      <a href="/stores" className={styles.storeButton}>
        Explore Stores
      </a>
      <p className={styles.identityText}>
        We connect global consumers with Premium Fashion
      </p>
    </section>
  );
};

export default HeroSection;
