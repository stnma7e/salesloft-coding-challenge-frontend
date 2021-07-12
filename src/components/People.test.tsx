import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { People } from './People';


test('frequencies are not shown on first load', () => {
    render(<People />);
    const frequencyLabel = screen.queryByText("FREQUENCIES:");
    expect(frequencyLabel).toBeNull();
});

test('frequencies are toggled when clicking button', () => {
    render(<People />);
    const freqButton = screen.getByText("Show Frequencies");
    fireEvent.click(freqButton);
  
    const frequencyLabel = screen.getByText("FREQUENCIES:");
    expect(frequencyLabel).toBeInTheDocument();
    
    fireEvent.click(freqButton);
    expect(frequencyLabel).not.toBeInTheDocument();
});


test('duplicates are not shown on first load', () => {
    render(<People />);
    const frequencyLabel = screen.queryByText("DUPLICATES:");
    expect(frequencyLabel).toBeNull();
});

test('duplicates are toggled when clicking button', () => {
    render(<People />);
    const freqButton = screen.getByText("Show Duplicates");
    fireEvent.click(freqButton);
  
    const frequencyLabel = screen.getByText("DUPLICATES:");
    expect(frequencyLabel).toBeInTheDocument();
    
    fireEvent.click(freqButton);
    expect(frequencyLabel).not.toBeInTheDocument();
});