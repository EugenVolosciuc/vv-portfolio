import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import client from "../config/graphql-client";
import { Layout } from "../layout/Layout";
import { GET_PROJECTS } from "../operations/projects";
import { Section } from "../styles/GlobalComponents";

const Home = ({ projects }) => {
  console.log("projects", projects);
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects projects={projects} />
    </Layout>
  );
};

export async function getStaticProps() {
  try {
    const { projects } = await client.request(GET_PROJECTS);

    return {
      props: {
        projects,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log("error", error);
    return {
      notFound: true,
    };
  }
}

export default Home;
