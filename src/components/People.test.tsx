import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { People } from './People';


test('frequencies are toggled when clicking button', () => {
    render(<People />);
    const freqButton = screen.getByText("Show Frequencies");
    fireEvent.click(freqButton);
  
    const frequencyLabel = screen.getByText("FREQUENCIES:");
    expect(frequencyLabel).toBeInTheDocument();
    
    fireEvent.click(freqButton);
    expect(frequencyLabel).not.toBeInTheDocument();
});
