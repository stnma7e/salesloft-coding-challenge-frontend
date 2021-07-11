import React from 'react';


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
            <h2>Name: {name}</h2>
            <div>Email: {props.email}</div>
            <div>Job title: {props.jobTitle}</div>
        </div>
    )
}