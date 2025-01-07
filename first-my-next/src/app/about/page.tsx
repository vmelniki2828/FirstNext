import Image from "next/image";
import cat from "./cat.jpg";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={cat} alt="Cat" />

      <div className={""}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        exercitationem explicabo et reprehenderit voluptas perspiciatis, saepe
        aspernatur vel sit a quam architecto eum impedit necessitatibus commodi
        ipsam corrupti illum iusto.
      </div>
    </article>
  );
}
