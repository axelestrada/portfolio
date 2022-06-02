import Section, { Article } from "/src/components/Section";
import Countdown from "/src/components/Countdown";
import Newsletter from "/src/components/Newsletter";
import Copyright from "/src/components/Copyright";

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
