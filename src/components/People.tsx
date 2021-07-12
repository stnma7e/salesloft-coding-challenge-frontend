import React, { useEffect, useState } from 'react';
import './People.css';
import { Person } from './Person';
import { Person as PersonData } from '../models/Person';
import { FrequencyChart } from './FrequencyChart';
import { DuplicatePeople } from './DuplicatePeople';


export function People() {
    const [peopleData, setPeopleData] = useState<PersonData[]>([]);
    const [showFrequency, setShowFrequency] = useState<boolean>(false);
    const [showDuplicates, setShowDuplicates] = useState<boolean>(false);

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/people", {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then((resp: PersonData[]) => {
                setPeopleData(resp);
            })
            .catch(err => {
                setPeopleData([]);
            });
    }, []);

    const people = peopleData.map((person: PersonData, i: number) =>
        <Person
            firstName={person.first_name}
            lastName={person.last_name}
            email={person.email_address}
            jobTitle={person.title}

            key={i}
        />
    );

    let frequencyChart = null;
    if (showFrequency) {
        frequencyChart =
            <div>
                <span className="title">FREQUENCIES:</span>
                <FrequencyChart
                    inputs={peopleData.map(person => person.email_address)}
                />
            </div>;
    }

    let duplicates = null;
    if (showDuplicates) {
        duplicates =
            <div>
                <span className="title">DUPLICATES:</span>
                <DuplicatePeople
                    people={peopleData}
                />
            </div>
    }

    return (
        <div>
            <button
                className="showExtraButton"
                onClick={() => setShowFrequency(!showFrequency)}
            >
                Show Frequencies
            </button>

            <button
                className="showExtraButton"
                onClick={() => setShowDuplicates(!showDuplicates)}
            >
                Show Duplicates
            </button>

            {duplicates}

            {frequencyChart}

            <div>
                <span className="title">PEOPLE:</span>
                {people}
            </div>
        </div>
    )
}