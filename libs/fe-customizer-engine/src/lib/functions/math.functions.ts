export function getRandomFrom(min: number, max: number){
    return min + Math.floor((max - min + 1) * Math.random());
}
