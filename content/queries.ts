import 'server-only';

import { CustomerPostQuery, HeaderNavQuery, HeroQuery, LogoWallQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

export const getContentForHeaderNav = async () => {
    const query = `#graphql
        query NavigationCollection($where: NavigationFilter) {
            navigationCollection(where: $where) {
                items {
                name
                linksCollection {
                    items {
                        label
                        link
                        }
                    }
                }
            }
        }
    `;
    
    const data = await contentGqlFetcher<HeaderNavQuery>({
        query, variables: {
            "where": {
                "name": "Header"
            }
        }
    })

    if (!data) {
        throw Error('No data found');
    }

    return data;

};

export const getContentForHero = async () => {
    const query = `#graphql
        query HeroCollection {
            heroCollection {
                items {
                title
                subtitle
                preTitle
                callToActionsCollection {
                    items {
                    link
                    label
                    }
                }
                }
            }
        }
    `

    const data = await contentGqlFetcher<HeroQuery>({ query });
    
    if (!data) {
        throw Error('No data found');
    }

    return data;

}

export const getContentForLogoWall = async () => {
    const query = `#graphql
        query AssetCollection($where: AssetFilter) {
            assetCollection(where: $where) {
                items {
                fileName
                title
                width
                height
                url
                }
            }
        }
    `;

    const data = await contentGqlFetcher<LogoWallQuery>({ query, variables: { where: { "title_contains": "client" } } });

    if (!data) {
        throw Error('No data found');
    }

    return data
}

export const getSlugsForPost = async () => {
    const query = `#graphql
        query SlugsForPost {
            customerPostCollection {
                items {
                    slug
                }
            }
        }
    `;

    const data = await contentGqlFetcher<{
        customerPostCollection: {
                items: {
                    slug: string
                }[]
            }
    }>({
        query
    });

    if (!data) {
        throw Error('No data found');
    }

    return data
}

export const getContentForCustomerPost = async (slug: string) => {
    const query = `#graphql
        query CustomerPostCollection($where: CustomerPostFilter) {
            customerPostCollection(where: $where) {
                items {
                _id
                title
                slug
                body {
                    json
                }
                customer {
                    name
                    logo {
                    url
                    fileName
                    title
                    height
                    width
                    }
                }
                }
            }
        }
    `;


    const data = await contentGqlFetcher<CustomerPostQuery>({
        query, variables: {
            "where": {
                // "slug": "how-canon-leverages-stellar-x-to-onboard-new-hosts"
                slug
            }
        }
    });

    if (!data) {
        throw Error('No data found');
    }

    return data

}