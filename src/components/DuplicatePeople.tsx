import React from 'react';
import './DuplicatePeople.css';
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

            //TODO add alternative checks here:
            // - check for distance between names, titles
        }
    }

    return (
        <div>
            {duplicates.map(([p1, p2], i: number) => {
                return (
                    <DuplicatePeopleCard
                        person1={p1}
                        person2={p2}
                        key={i}
                    />
                );
            })}
        </div>
    );
}

interface DuplicatePeopleCardProps {
    person1: Person,
    person2: Person,
}

function DuplicatePeopleCard(props: DuplicatePeopleCardProps) {
    return (
        <div className="card duplicate-card">
            <div className="card-header">Potential Duplicate:</div>
            <div className="card-content columns">
                <div className="column">
                    <PersonComponent
                        firstName={props.person1.first_name}
                        lastName={props.person1.last_name}
                        email={props.person1.email_address}
                        jobTitle={props.person1.title}
                    />
                </div>
                <div className="column">
                    <PersonComponent
                        firstName={props.person2.first_name}
                        lastName={props.person2.last_name}
                        email={props.person2.email_address}
                        jobTitle={props.person2.title}
                    />
                </div>
            </div>
        </div>
    );
}