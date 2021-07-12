import React from 'react';
import { render, screen } from '@testing-library/react';
import { DuplicatePeople } from './DuplicatePeople';
import { Person } from '../models/Person';


test('DuplicatePeople successfully flags certain emails', () => {
    const people: Person[] = [
        {
            id: 0,
            first_name: "",
            last_name: "",
            title: "",
            email_address: "asdf@asdf.com"
        },
        {
            id: 0,
            first_name: "",
            last_name: "",
            title: "",
            email_address: "asdf1@asdf.com"
        },
        {
            id: 0,
            first_name: "",
            last_name: "",
            title: "",
            email_address: "asdf12@asdf.com"
        },
        {
            id: 0,
            first_name: "",
            last_name: "",
            title: "",
            email_address: "asdf123@asdf.com"
        },
        {
            id: 0,
            first_name: "",
            last_name: "",
            title: "",
            email_address: "asdf1234@asdf.com"
        },
        {
            id: 0,
            first_name: "",
            last_name: "",
            title: "",
            email_address: "asdf12345@asdf.com"
        },
        {
            id: 0,
            first_name: "",
            last_name: "",
            title: "",
            email_address: "asdf123456@asdf.com"
        },
    ];
    render(<DuplicatePeople people={people} />);
    
    const dups = screen.queryAllByText("Potential Duplicate:");
    const nCollisions = 20; // this is how many overlaps will be in the above dataset
    expect(dups).toHaveLength(nCollisions);
});