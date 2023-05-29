export const message = "And the winner is: ";

export const checkIfEven = (value) => {
    return value % 2 === 0;
}
export function generateChip() {
    return Math.floor(Math.random() * (21 - 1) + 1);
}