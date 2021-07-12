import React from 'react';
import { Person as PersonComponent } from './Person';
import { Person } from '../models/Person';
import { editDistance } from '../utilities/EditDistance';


interface DuplicatePeopleProps {
    people: Person[],
}

export function DuplicatePeople(props: DuplicatePeopleProps) {
    const similarEditDistance = 5;

    let duplicates: [Person, Person][] = [];
    for (let i = 0; i < props.people.length; i++) {
        const person1 = props.people[i];

        for (let j = i + 1; j < props.people.length; j++) {
            const person2 = props.people[j];

            const dist = editDistance(person1.email_address, person2.email_address);
            if (dist <= similarEditDistance) {
               duplicates.push([person1, person2]);
            }
        }
    }

    return (
        <div>
            {duplicates.map(([p1, p2], i: number) => {
               return (
                   <div key={i}>
                       <h2>Potential Duplicate:</h2>
                       <PersonComponent
                            firstName={p1.first_name}
                            lastName={p1.last_name}
                            email={p1.email_address}
                            jobTitle={p1.title}
                       />
                       <PersonComponent
                            firstName={p2.first_name}
                            lastName={p2.last_name}
                            email={p2.email_address}
                            jobTitle={p2.title}
                       />
                   </div>
                );
            })}
        </div>
    );
}