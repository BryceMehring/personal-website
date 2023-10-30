import { Project } from './project';
import { useStaticQuery, graphql } from 'gatsby';

export const Projects = (): JSX.Element => {
  const { allProjectsJson } = useStaticQuery(graphql`
    query {
      allProjectsJson {
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
                    gatsbyImageData(width: 512, height: 350)
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = allProjectsJson.nodes.map(({ project }: any) => {
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
