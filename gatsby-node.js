exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ProjectsYaml implements Node {
      project: MarkdownRemark @link(by: "frontmatter.id")
    }

    type MarkdownRemarkFrontmatterImage {
      source: File @link(by: "relativePath")
    }
  `;

  createTypes(typeDefs);
};
