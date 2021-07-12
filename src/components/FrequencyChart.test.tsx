import React from 'react';
import { render, screen } from '@testing-library/react';
import { FrequencyChart } from './FrequencyChart';


test('frequency chart only contains letters that are given', () => {
    const inputs: string[] = [
        "asdf",
    ];
    render(<FrequencyChart inputs={inputs} />);
    
    for (let input of inputs) {
        for (let c of "abcdefghijklnmopqrstuvwxyz") {
            if (input.indexOf(c) > -1) {
                const label = screen.getByText(c);
                expect(label).toBeInTheDocument();
            }
        }
    }     
});