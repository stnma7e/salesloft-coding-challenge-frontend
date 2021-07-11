import React from 'react';
import { frequencies } from '../utilities/Frequency';


interface PersonProps {
    firstName: string,
    lastName: string,
    email: string,
    jobTitle: string,
}

export function Person(props: PersonProps) {
    const name = props.firstName + " " + props.lastName;

    return (
        <div>
            <h4>Name: {name}</h4>
            <div>Email: {props.email}</div>
            <div>Job title: {props.jobTitle}</div>
        </div>
    )
}