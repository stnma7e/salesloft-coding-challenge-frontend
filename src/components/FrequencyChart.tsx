import React from 'react';
import { frequencies } from '../utilities/Frequency';


interface FrequencyChartProps {
    inputs: string[]
}

export function FrequencyChart(props: FrequencyChartProps) {
    let freqs = Array.from(frequencies(props.inputs).entries());
    freqs.sort(([c1, freq1]: [string, number], [c2, freq2]: [string, number]) => {
        // sort by descending frequency

        if (freq1 < freq2) {
            return 1;
        } else if (freq1 > freq2) {
            return -1;
        } else {
            return 0;
        }
    });

    const chart = freqs.map(
        ([char, freq]: [string, number], i: number) => {
            return (
                <div key={i}>
                    {char}: {freq}
                </div>
            );
        }
    );

    return (
        <div>
            {chart}
        </div>
    )
}