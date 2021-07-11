import React, { useEffect, useState } from 'react';
import { Person } from './Person';
import { Person as PersonData } from '../models/Person';


export function People() {
    const [peopleData, setPeopleData] = useState<PersonData[]>([]);
    
    const people = peopleData.map(person => {
        <Person
            firstName={person.first_name}
            lastName={person.last_name}
            email={person.email_address}
            jobTitle={person.title}
        />
    });
    
    console.log(people);
    
    return (
        <div>
            PEOPLE
            {people}
        </div>
    )
}