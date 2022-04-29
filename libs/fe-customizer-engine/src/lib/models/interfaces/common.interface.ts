export interface FECCoordinates{
    x: number,
    y: number
}

export interface FECColorSettings {
    options?: string[]; // hexcode discrete options
    // TODO: future options, uncomment later
    // preset?: fancier options like skintone, use colorpicker, etc
    // renderFunction?: (inputs: any)=>{ } // add custom color overlay function
}
