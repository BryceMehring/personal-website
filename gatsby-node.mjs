export const createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ProjectsJson implements Node {
      project: MarkdownRemark @link(by: "frontmatter.id")
    }

    type MarkdownRemarkFrontmatterImage {
      source: File @link(by: "relativePath")
    }
  `;

  createTypes(typeDefs);
};
