export type HeroQuery = {
    heroCollection: {
        items: {
            title: string
            subtitle: string
            preTitle: string
            callToActionsCollection: {
                items: {
                    link: string
                    label: string
                }[]
            }
        }[]
    }
};

export type AssetItem = {
    fileName: string
    title: string
    width: number
    height: number
    url: string
}

export type LogoWallQuery = {
    assetCollection: {
        items: AssetItem[]
    }
};

export type HeaderNavQuery = {
    navigationCollection: {
        items: {
            name: string
            linksCollection: {
                items: {
                    label: string
                    link: string
                }[]
            }
        }[]
    }
};

export type CustomerPostQuery = {
    customerPostCollection: {
        items: {
            title: string
            slug: string
            body: {
                json: JSON
            }
            customer: {
                name: string
                logo: AssetItem
            }
        }[]
    }
};