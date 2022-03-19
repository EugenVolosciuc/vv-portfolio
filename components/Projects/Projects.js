import {
  BlogCard,
  CardInfo,
  Links,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { truncate } from "../../utils/string-manipulations";
import Image from "next/image";

const Projects = ({ projects }) => {
  const handleViewImages = () => {
    console.log("first");
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle style={{ paddingTop: "24px" }} main>
        Projects
      </SectionTitle>
      <GridContainer>
        {projects.map((project, i) => {
          return (
            <BlogCard key={i}>
              <TitleContent>
                <HeaderThree style={{ marginTop: "1.5rem" }}>
                  {project.title}
                </HeaderThree>
                <Hr />
              </TitleContent>
              {project.images && project.images.length > 0 && (
                <div
                  style={{
                    width: "calc(100% - 100px)",
                    height: "200px",
                    position: "relative",
                    margin: "0 auto 14px auto",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={project.images[0].url}
                    alt={project.title}
                  />
                </div>
              )}
              <CardInfo className="card-info">
                {truncate(project.description, 50)}
              </CardInfo>
              <UtilityList>
                {project.images && project.images.length > 0 && (
                  <Links onClick={handleViewImages}>Check images</Links>
                )}
                {(project.links || []).map((link) => (
                  <Links key={link.id} href={link.url} target="_blank">
                    {link.title}
                  </Links>
                ))}
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
