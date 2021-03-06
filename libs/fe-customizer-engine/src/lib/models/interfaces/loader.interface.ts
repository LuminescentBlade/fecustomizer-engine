import { FECColorSettings, FECCoordinates } from "./common.interface"

export interface FECLoaderOptions {
    rootKey: string,
    rootPath: string,
    imageType: string,
    menuOrder: string[],
    layerOrder: string[],
    dimensions: FECCoordinates,
    bodyOptions: FECLoaderBodyConfig
}
export interface FECLoaderBodyConfig {
    [key: string]: FECLoaderBodyType
}

export interface FECLoaderBodyType {
    title: string,
    path: string,
    offset: { x: number, y: number }
    options: FECLoaderBodyOptions
}

export interface FECLoaderBodyOptions {
    [key: string]: FECLoaderBodyOptionItem
}

export interface FECLoaderBodyOptionItem {
    title: string,
    path: string,
    offset: { x: number, y: number },
    childOptions?: FECLoaderBodyChildOptions,
    dependsOn?: string,
    count?: number,
    toggleable?: boolean,
    canBeBlank?: boolean,
    colorSettings?: FECColorSettings
}

export interface FECLoaderBodyChildOptions{
    [key: string | number]: {
        title: string,
        path?: string
    }
}
export interface FECImageCache {
    [key: string]: HTMLImageElement
};
export interface FECLoaderConfig {
    baseKey: string,
    assets: FECImageCache,
    menuOrder: string[]
}

export interface FECImagePathConfig {
    name: string,
    path?: string,
    subCategories?: FECImagePathConfig[]
}

export interface FECImageLoad{
    count: number,
    loaded: number,
    images: FECImageCache | null
}
