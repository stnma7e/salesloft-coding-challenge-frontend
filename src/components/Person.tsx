import React from 'react';
import './Person.css';


interface PersonProps {
    firstName: string,
    lastName: string,
    email: string,
    jobTitle: string,
}

export function Person(props: PersonProps) {
    const name = props.firstName + " " + props.lastName;

    return (
        <div className="person">
            <div>Name: {name}</div>
            <div>Email: {props.email}</div>
            <div>Job title: {props.jobTitle}</div>
        </div>
    )
}