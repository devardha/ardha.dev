import { GraphQLClient, gql } from 'graphql-request';

const client = new GraphQLClient(process.env.STRAPI_GRAPHQL_URL);
const ENV = process.env.NEXT_PUBLIC_VERCEL_ENV;

export const getPosts = async () => {
    const queryLive = gql`
        {
            posts(sort: "published_at:desc", publicationState: LIVE) {
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
                },
                content
            }
        }
    `;

    const queryPreview = gql`
{
    posts(sort: "published_at:desc", publicationState: PREVIEW) {
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
        },
        content
    }
}
`;

    return client.request(ENV === 'production' ? queryLive : queryPreview);
}

export const getPostsByCategory = async (category) => {
    const query = gql`
        {
            posts(where: { categories: { slug: "${category}" }}){
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
                },
                content
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

export const getCategories = async () => {
    const query = gql`
        {
            categories(sort: "name:asc"){
                name,
                slug
            }
        }
    `;

    return client.request(query);
}

export const getCategoryBySlug = async (slug) => {
    const query = gql`
        {
            categories(where: { slug: "${slug}" }){
                name,
            }
        }
    `;

    return client.request(query);
}