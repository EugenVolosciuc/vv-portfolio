import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.GRAPHCMS_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export default client;
