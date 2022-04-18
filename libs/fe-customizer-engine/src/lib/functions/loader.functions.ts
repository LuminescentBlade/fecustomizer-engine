import { FECustomizerImagePathConfig } from "../models";

export async function loadImagesFromLocal(config: FECustomizerImagePathConfig): Promise<any> {
    const images: any = {};
    console.log(config);
    const recursiveLoad = async (currentPath: string, currentKey: string | null, currentConfig: FECustomizerImagePathConfig) => {
        const nextKey = currentKey ? `${currentKey} ${currentConfig.name}` : currentConfig.name;
        const nextPath = [currentPath, currentConfig.path].join('/');
        if (currentConfig.subCategories?.length) {
            for (const item of currentConfig.subCategories) {
                await recursiveLoad(nextPath, nextKey, item);
            }
        } else {
            const image = new Image();
            image.src = nextPath;
            await image.decode();
            images[nextKey] = image;
        }
    };

    await recursiveLoad('', null, config);
    return images;
}
