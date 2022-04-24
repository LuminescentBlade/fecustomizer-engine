import { FECustomizerImagePathConfig } from "../models";

export async function loadImagesFromLocal(config: FECustomizerImagePathConfig): Promise<any> {
    const imagePromises: Promise<any>[] = [];
    const recursiveLoad = (currentPath: string, currentKey: string | null, currentConfig: FECustomizerImagePathConfig) => {
        const nextKey = currentKey ? `${currentKey} ${currentConfig.name}` : currentConfig.name;
        const nextPath = [currentPath, currentConfig.path].join('/');
        if (currentConfig.subCategories?.length) {
            for (const item of currentConfig.subCategories) {
                recursiveLoad(nextPath, nextKey, item);
            }
        } else {
            const loadImage = generateImagePromise(nextKey, nextPath);
            imagePromises.push(loadImage);
        }
    };
    recursiveLoad('', null, config);
    const resolvedImages = await Promise.all(imagePromises);
    return resolvedImages.reduce((images, data) => {
        images[data.key] = data.image;
        return images;
    }, {});
}

function generateImagePromise(key: string, path: string) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => {
            resolve({ key, image });
        });
        image.src = path;
    });
}
