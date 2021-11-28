import { Project } from './project';
import { useStaticQuery, graphql } from 'gatsby';

export const Projects = (): JSX.Element => {
  const { allProjectsYaml } = useStaticQuery(graphql`
    query {
      allProjectsYaml {
        nodes {
          project {
            id
            frontmatter {
              id
              title
              shortTitle
              description
              position
              image {
                alt
                source {
                  childImageSharp {
                    gatsbyImageData(width: 512)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = allProjectsYaml.nodes.map(({ project }: any) => {
    const { id, frontmatter } = project;
    const {
      image,
      description,
      position,
      title,
      shortTitle,
      id: projectId,
    } = frontmatter;
    return (
      <Project
        id={projectId}
        image={image}
        title={title}
        shortTitle={shortTitle}
        description={description}
        position={position}
        key={id}
      />
    );
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">{projects}</div>
    </div>
  );
};
