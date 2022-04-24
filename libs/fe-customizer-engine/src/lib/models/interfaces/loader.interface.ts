export interface FECustomizerBodyOptions {
    [bodyKey: string]: FECustomizerBodyOptionItem
}

export interface FECustomizerLoadBase{
    name: string,
    path: string
}

export interface FECustomizerBodyOptionItem {
    [optionKey: string]: boolean | number | { dependsOn: string, options: string[] }
}

export interface FECustomizerPathMap {
    [key: string]: string
}

export interface FECustomizerOptionTitles {
    [key: string]: string | {
        title: string,
        children: string[] | { [key: string]: string }
    }
}