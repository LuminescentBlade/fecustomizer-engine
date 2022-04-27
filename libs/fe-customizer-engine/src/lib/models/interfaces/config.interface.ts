import { FECColorSettings, FECCoordinates } from "./common.interface";

export interface FECConfig {
    options: FECBodyType[],
    menuOrder: string[],
    layerOrder: string[],
    dimensions: FECCoordinates,
}
export interface FECBodyType {
    bodyType: string,
    title: string,
    config: FECCustomizationOption[]
};
export interface FECCustomizationOption {
    name: string,
    title: string,
    offset: FECCoordinates | null,
    optionLabels?: string[]
    dependsOn?: string,
    canBeBlank: boolean,
    assets: null | HTMLImageElement | HTMLImageElement[] | HTMLImageElement[][],
    colorSettings?: FECColorSettings
}
export interface FECConfigLoad {
    complete: number,
    data: FECConfig | null
}
