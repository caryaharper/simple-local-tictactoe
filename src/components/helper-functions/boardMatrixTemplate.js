export default function boardMatrixTemplate  () {
    const template = [];

    for (let i = 0; i < 3; i++) {
        template.push(Array(3).fill(''));
    }

    return template;
}