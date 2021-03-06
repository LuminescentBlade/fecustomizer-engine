import { FECLoaderBodyConfig } from "fe-customizer-engine";

enum BodyTypes {
    Female1 = 'b_female1',
    Female2 = 'b_female2',
    Male1 = 'b_male1',
    Male2 = 'b_male2'
};
enum Options {
    HairClip = 'o_hairclip',
    Hair = 'o_hair',
    Sweat = 'o_sweat',
    Blush = 'o_blush',
    Features = 'o_features',
    Expressions = 'o_expressions',
    Body = 'o_body'
};
enum Expressions {
    Normal = 'e_normal',
    Smile = 'e_smile',
    Pained = 'e_pained',
    Angry = 'e_angry',
    Indignant = 'e_indignant'
};

const options = {
    [Options.Body]: {
        title: 'Face',
        count: 7,
        path: 'body'
    },
    [Options.Hair]: {
        title: 'Hair',
        count: 12,
        path: 'hair',
        colorSettings: {
            options: [
                "#F1EFE6", "#C35654", "#D1876A", "#E9D7C1", "#A6D1A2", "#7AB6C0",
                "#90A6CF", "#C9A0D1", "#F9D7DB", "#C1A798", "#9FA0A1", "#9B3F42",
                "#996049", "#CABFA2", "#698059", "#377781", "#4A5877", "#81608A",
                "#EAAFB2", "#817062", "#5A5850", "#E75860", "#F1976E", "#E9D699",
                "#89CE84", "#7FE0DB", "#4881B3", "#AB7ED3", "#F28FA9", "#69473D"
            ]
        },
    },
    [Options.HairClip]: {
        title: 'Hair Clip',
        count: 5,
        path: 'hairclip',
        canBeBlank: true
    },
    [Options.Features]: {
        title: 'Facial Features',
        count: 12,
        path: 'features',
        canBeBlank: true
    },
    [Options.Expressions]: {
        title: 'Expressions',
        path: 'body',
        childOptions: {
            [Expressions.Normal]: {
                title: 'Default',
                path: 'normal'
            },
            [Expressions.Smile]: {
                title: 'Smile',
                path: 'smile'
            },
            [Expressions.Pained]: {
                title: 'Pained',
                path: 'pained'
            },
            [Expressions.Angry]: {
                title: 'Angry',
                path: 'angry'
            },
            [Expressions.Indignant]: {
                title: 'Indignant',
                path: 'indignant'
            }
        },
        dependsOn: Options.Body
    },
    [Options.Sweat]: {
        title: 'Sweat',
        path: 'sweat',
        toggleable: true,
    },
    [Options.Blush]: {
        title: 'Blush',
        path: 'blush',
        toggleable: true
    }
};

export const key = 'CORN';
export const menuOrder = [Options.Hair, Options.HairClip, Options.Body, Options.Features, Options.Expressions, Options.Blush, Options.Sweat];
export const layerOrder = [Options.HairClip, Options.Hair, Options.Features, Options.Sweat, Options.Blush, Options.Expressions, Options.Body];

export const bodOptions: FECLoaderBodyConfig = {
    [BodyTypes.Female1]: {
        title: 'Female 1',
        path: 'female1',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } },
            [Options.HairClip]: { ...options[Options.HairClip], offset: { x: 128, y: 27 } },
            [Options.Features]: { ...options[Options.Features], offset: { x: 0, y: 0 } },
            [Options.Expressions]: { ...options[Options.Expressions], offset: { x: 0, y: 0 } },
            [Options.Sweat]: { ...options[Options.Sweat], offset: { x: 130, y: 85 } },
            [Options.Blush]: { ...options[Options.Blush], offset: { x: 96, y: 64 } }
        },
    },
    [BodyTypes.Female2]: {
        title: 'Female 2',
        path: 'female2',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } },
            [Options.HairClip]: { ...options[Options.HairClip], offset: { x: 128, y: 27 } },
            [Options.Features]: { ...options[Options.Features], offset: { x: 0, y: 0 } },
            [Options.Expressions]: { ...options[Options.Expressions], offset: { x: 0, y: 0 } },
            [Options.Sweat]: { ...options[Options.Sweat], offset: { x: 131, y: 101 } },
            [Options.Blush]: { ...options[Options.Blush], offset: { x: 96, y: 75 } }
        }
    },
    [BodyTypes.Male1]: {
        title: 'Male 1',
        path: 'male1',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } },
            [Options.Features]: { ...options[Options.Features], offset: { x: 0, y: 0 } },
            [Options.Expressions]: { ...options[Options.Expressions], offset: { x: 0, y: 0 } },
            [Options.Sweat]: { ...options[Options.Sweat], offset: { x: 133, y: 79 } },
            [Options.Blush]: { ...options[Options.Blush], offset: { x: 90, y: 45 } }
        }
    },
    [BodyTypes.Male2]: {
        title: 'Male2',
        path: 'male2',
        offset: { x: 0, y: 0 },
        options: {
            [Options.Body]: { ...options[Options.Body], offset: { x: 0, y: 0 } },
            [Options.Hair]: { ...options[Options.Hair], offset: { x: 0, y: 0 } },
            [Options.Features]: { ...options[Options.Features], offset: { x: 0, y: 0 } },
            [Options.Expressions]: { ...options[Options.Expressions], offset: { x: 0, y: 0 } },
            [Options.Sweat]: { ...options[Options.Sweat], offset: { x: 134, y: 70 } },
            [Options.Blush]: { ...options[Options.Blush], offset: { x: 87, y: 42 } }
        }
    }
}
