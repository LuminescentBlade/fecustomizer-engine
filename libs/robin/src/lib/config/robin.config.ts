import { FECLoaderBodyConfig } from "fe-customizer-engine";

enum BodyTypes {
    Female1 = 'b_female1',
    Female2 = 'b_female2',
    Female3 = 'b_female3',
    Male1 = 'b_male1',
    Male2 = 'b_male2',
    Male3 = 'b_male3'
};
enum Options {
    Hair = 'o_hair',
    Body = 'o_body'
};

const options = {
    [Options.Body]: {
        title: 'Face',
        count: 5,
        path: 'face'
    },
    [Options.Hair]: {
        title: 'Hair',
        count: 5,
        path: 'hair',
        colorSettings: {
            options: [
                "#f9f2eb","#8e5956","#4c5f7a","#6e8160","#7d6350",
                "#f6b1b1","#dfc7a9","#83618a","#5a5354","#b3afb0",
                "#d57a80","#97aed3","#84cad2","#b9d3ad","#cbb1a1",
                "#ffdadc","#fde8c0","#c7a3d8","#b17878","#e28d73"
            ]
        },
    }
};

export const key = 'ROBIN';
export const menuOrder = [Options.Hair, Options.Body];
export const layerOrder = [Options.Hair, Options.Body];

export const bodOptions: FECLoaderBodyConfig = {
    [BodyTypes.Female1]: {
        title: 'Female 1',
        path: 'female1',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } }
        },
    },
    [BodyTypes.Female2]: {
        title: 'Female 2',
        path: 'female2',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } },
        }
    },
    [BodyTypes.Female3]: {
        title: 'Female 3',
        path: 'female3',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } },
        }
    },
    [BodyTypes.Male1]: {
        title: 'Male 1',
        path: 'male1',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } },
        }
    },
    [BodyTypes.Male2]: {
        title: 'Male2',
        path: 'male2',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } }
        }
    },
    [BodyTypes.Male3]: {
        title: 'Male3',
        path: 'male3',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } }
        }
    }
}
