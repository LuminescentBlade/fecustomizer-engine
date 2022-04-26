import { FECCoordinates } from "./common.interface";

export interface FECConfig{
    options: FECBodyConfig[],
    dimensions: FECCoordinates,
}
export interface FECBodyConfig {
    bodyType: string,
    title: string,
    config: FECOptionConfig[]
};
export interface FECOptionConfig {
    name: string,
    title: string,
    offset: FECCoordinates | null,
    optionLabels?: string[]
    dependsOn?: string,
    canBeBlank: boolean,
    assets: null | HTMLImageElement | HTMLImageElement[] | HTMLImageElement[][],
    colorSettings?: FECColorSettings
}

export interface FECColorSettings {
    options?: string[]; // hexcode discrete options
    // TODO: future options, uncomment later
    // useColorPicker?: boolean // add a full colorpicker
    // renderFunction?: (inputs: any)=>{ } // add custom color overlay function
}
