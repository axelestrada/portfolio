import styles from "./styles/Blog.module.sass";

import Countdown from "../components/Countdown";
import Copyright from "../components/Copyright";

export default function Blog() {
  return (
    <section className={styles["blog"]}>
      <h3 className={styles["section__title"]}>
        Blog <span className={styles["underline"]}></span>
      </h3>

      <article className={`${styles["article"]} ${styles["coming-soon"]}`}>
        <h4 className={styles["article__title"]}>¡Próximamente!</h4>

        <Countdown />
      </article>

      <Copyright />
    </section>
  );
}
