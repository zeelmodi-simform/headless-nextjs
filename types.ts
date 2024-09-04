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

export type LogoWallQuery = {
    assetCollection: {
        items: {
            fileName: string
            title: string
            width: number
            height: number
            url: string
        }[]
    }
};