export interface FECustomizerConfig {
    bodyType: string,
    title: string,
    config: any[]
};
export interface FECustomizerBodyConfig {
    name: string,
    title: string,
    dependsOn?: string,
    assets: any[] | any [][], // TODO: specify image format
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
    directory?: string,
    fileName?: string,
    subCategory: FECustomizerBodyConfig[]
}
