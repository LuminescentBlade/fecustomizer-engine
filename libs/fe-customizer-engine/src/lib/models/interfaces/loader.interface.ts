export interface FECBodyOptions {
    [bodyKey: string]: FECBodyOptionItem
}

export interface FECLoadBase {
    name: string,
    path: string
}

export interface FECBodyOptionItem {
    [optionKey: string]: boolean | number | FECDependantOptionItem
}

export interface FECDependantOptionItem {
    dependsOn: string,
    options: string[]
}
export interface FECPathMap {
    [key: string]: string
}

export interface FECOptionTitles {
    bodyTypes: {
        [key: string]: string
    },
    options: {
        [key: string]: string | FECOptionTitleConfig
    }
}

export interface FECOptionTitleConfig {
    title: string,
    children: string[] | { [key: string]: string }
}

export interface FECImageCache {
    [key: string]: HTMLImageElement
};
export interface FECLoaderConfig {
    baseKey: string,
    assets: FECImageCache,
    titles: FECOptionTitles,
    menuOrder: string[]
}
