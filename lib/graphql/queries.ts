import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.STRAPI_GRAPHQL_URL);

export const getPosts = () => {
    const query = gql`
        {
            posts(sort: "published_at:desc") {
                title,
                description,
                slug,
                image{
                    url
                },
                published_at,
                categories{
                    name,
                    slug
                }
            }
        }
    `;

    return client.request(query);
}