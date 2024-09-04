import { HeroQuery, LogoWallQuery } from "@/types";
import { contentGqlFetcher } from "./fetch";

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