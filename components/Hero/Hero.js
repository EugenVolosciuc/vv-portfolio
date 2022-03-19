import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding style={{ marginBottom: "2rem" }}>
      <LeftSection>
        <SectionTitle main center>
          Hi, I`&apos;`m Valeria. <br />
          Designer. Thinker.
        </SectionTitle>
        <SectionText>
          I specialize in designing in the web space, help companies visualize
          their next big idea and turn it from a paperball to a paperplane, as
          well as improve their existing ventures.
          <br />
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
