import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.STRAPI_GRAPHQL_URL);

export const getPosts = async () => {
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

export const getPostBySlug = async (slug) => {
    const query = gql`
        {
            posts(where: { slug: "${slug}" }){
                title,
                description,
                content
                seo{
                    metaTitle,
                    metaDescription,
                    shareImage{
                        url
                    }
                }
                slug,
                image{
                    url,
                    caption
                },
                published_at,
                categories{
                    name
                }
            }
        }
    `;

    return client.request(query);
}

export const getPages = async () => {
    const query = gql`
        {
            pages{
                slug
            }
        }
    `;

    return client.request(query);
}

export const getPageBySlug = async (slug) => {
    const query = gql`
        {
            pages(where: { slug: "${slug}" }){
                title,
                content,
                seo{
                    metaTitle,
                    metaDescription,
                    shareImage{
                        url
                    }
                }
            }
        }
    `;

    return client.request(query);
}