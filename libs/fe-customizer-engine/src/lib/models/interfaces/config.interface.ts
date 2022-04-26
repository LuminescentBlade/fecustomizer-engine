export interface FECConfig {
    bodyType: string,
    title: string,
    config: FECBodyConfig[]
};
export interface FECBodyConfig {
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
export interface FECImagePathConfig {
    name: string,
    path?: string,
    subCategories?: FECImagePathConfig[]
}

export interface FECCoordinates{
    x: number,
    y: number
}
