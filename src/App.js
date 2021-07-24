import React, { Component } from 'react';
import { Alert, Button, Badge } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify'
import Persons from './components/persons/Persons';


class App extends Component {
    state = {
        persons: [

        ],
        person: "",
        personShow: true
    }

    handelPersonShow = () => {
        this.setState({ personShow: !this.state.personShow });
        console.log(this.state.personShow);
    }

    handelPersonDelete = id => {
        const persons = [...this.state.persons];
        const personFiltered = persons.filter(p => p.id !== id);
        this.setState({ persons: personFiltered });

        const personIndex = persons.findIndex(p => p.id === id);
        const person = persons[personIndex];
        toast.error(`${person.Fullname} با موفقیت حذف شد`,{
            position: 'top-right'
        });

    }

    handelChangePerson = (event, id) => {
        const { persons: allPersons } = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.Fullname = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({ persons });
    }
    handleAddPerson = () => {
        const persons = [...this.state.persons];
        const person = {
            id: Math.floor(Math.random() * 1000),
            Fullname: this.state.person
        };
        if (person.Fullname !== "" & person.Fullname !== " ") {

            persons.push(person);
            this.setState({ persons: persons, person: "" });
            toast.success("کاربر با موفقیت اضافه شد",{
                position: 'top-right',
                
            });
        }
    }

    personAdd = event => {
        this.setState({ person: event.target.value });
    }

    render() {

        const { persons, personShow } = this.state;

        // const style = {
        //     textAlign: "center"
        // }
        // const btnStyle = {
        //     padding: "10px",
        //     backgroundColor: "pink",
        //     borderRadius: "10px"
        // }

        let person;
        if (personShow) {
            person = <Persons
                persons={persons}
                personDelete={this.handelPersonDelete}
                personChanged={this.handelChangePerson}
            />;
        }

        let badgeStyle = '';

        if (persons.length <= 2) badgeStyle = "warning";
        if (persons.length >= 3) badgeStyle = "success";
        if (persons.length <= 1) badgeStyle = "danger";

        return (
            <div className="rtl text-center">
                <Alert variant="info">
                    <h3>نمایش اشخاص</h3>
                </Alert>
                <Alert variant="light">
                    تعداد اشخاص <Badge pill variant={badgeStyle}> {persons.length} </Badge> نفر می باشد
                </Alert>
                <div className="m-2 p-2">
                    <form className="form-inline justify-content-center" onSubmit={event => event.preventDefault()}>
                        <div className="input-group d-flex justify-content-center w-25">
                            <input className="form-controll" value={this.state.person} onChange={this.personAdd} placeholder={"نام را وارد کنید"} style={{ direction: "rtl" }} />
                            <Button
                                variant="success"
                                size="sm"
                                className="btn btn-sm btn-success fa fa-plus-square"
                                onClick={this.handleAddPerson}
                                type="submit">

                            </Button>
                        </div>

                    </form>
                </div>
                {person}
                <ToastContainer />
                <br />

                <Button variant={personShow ? "info" : "danger"} onClick={this.handelPersonShow}>نمایش</Button>

            </div>
        );
    }
}

export default App;