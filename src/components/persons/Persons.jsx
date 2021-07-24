import React from 'react';
import Person from './Person';


const Persons = ({persons, personDelete, personChanged}) => {
    return(
        <div>
            {persons.map(person => (
                <Person 
                key = {person.id}
                Fullname={person.Fullname} 
                Deleted={() => personDelete(person.id)}
                changed={(event) => personChanged(event, person.id)}
                 />
            ))}
        </div>
    );
}

export default Persons;