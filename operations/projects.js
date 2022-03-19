import { gql } from "graphql-request";

export const GET_PROJECTS = gql`
  query GET_PROJECTS {
    projects {
      title
      links {
        ... on ProjectLink {
          id
          title
          url
        }
      }
      id
      description
      createdAt
      images {
        id
        url
      }
    }
  }
`;
