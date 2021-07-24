import React from 'react';
import './person.css';


const Person = ({ Fullname, Deleted, changed }) => {
    return (
        <div className="card text-white bg-info mb-3 mt-3 w-25 mx-auto" >
            <div className="card-body text-center">
                <p className="d-block">

                    {`${Fullname}`}
                </p>
                <div className="input-group justify-content-center">

                    <input placeholder={Fullname} className="form-controll w-50" type="Text" onChange={changed}></input>
                    <div className="input-group-prepend">
                        <button className="btn btn-danger fa fa-trash" onClick={Deleted}></button>

                    </div>
                </div>

            </div>
        
        </div>
    );
}

export default Person;