export function frequencies(inputs: string[]): Map<string, number> {
    let frequencies = new Map<string, number>();
    for (let input of inputs) {
        for (let i = 0; i < input.length; i++) {
            const c = input[i];
            const current_count = frequencies.get(c) || 0;
            frequencies.set(c, current_count  + 1);
        }
    }

    return frequencies;
}