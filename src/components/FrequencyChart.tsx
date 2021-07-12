import React from 'react';
import './FrequencyChart.css';
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
                <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{char}</td>
                    <td>{freq}</td>
                </tr>
            );
        }
    );

    return (
        <table className="table frequencyTable">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Character</th>
                    <th>Frequency</th>
                </tr>
            </thead>
            <tbody>
                {chart}
            </tbody>
        </table>
    )
}