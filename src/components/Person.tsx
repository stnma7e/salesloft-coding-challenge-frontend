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
            <div>Name: {name} </div>
            <div>Email: {props.email} </div>
            <div>Job title: {props.jobTitle} </div>
        </div>
    )
}