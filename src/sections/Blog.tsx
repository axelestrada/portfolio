import Section, { Article } from "../components/Section";
import Countdown from "../components/Countdown";
import Newsletter from "../components/Newsletter";
import Copyright from "../components/Copyright";

export default function Blog() {
  return (
    <Section title="Blog" className="blog">
      <Article title="¡Próximamente!" className="coming-soon">
        <Countdown />

        <Newsletter />
      </Article>

      <Copyright />
    </Section>
  );
}
