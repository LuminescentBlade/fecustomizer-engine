export interface FECustomizerConfig {
    bodyType: string,
    title: string,
    config: FECustomizerBodyConfig[]
};
export interface FECustomizerBodyConfig {
    name: string,
    title: string,
    dependsOn?: string,
    canBeBlank?: boolean,
    assets: null | HTMLImageElement | HTMLImageElement[] | HTMLImageElement [][],
    colorSettings?: FECustomizerColorSettings
}

export interface FECustomizerColorSettings {
    options?: string[]; // hexcode discrete options
    // TODO: future options, uncomment later
    // useColorPicker?: boolean // add a full colorpicker
    // renderFunction?: (inputs: any)=>{ } // add custom color overlay function
}
export interface FECustomizerImagePathConfig {
    name: string,
    path?: string,
    subCategories?: FECustomizerImagePathConfig[]
}
