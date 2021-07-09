import React , {Component} from "react";
import Person from "./components/Person";
import Persons from "./components/Persons";


class App extends Component {
    state = {
        persons :[ ],
        person : "",
        showPersons : false 
    };
    handleShowPerson = () =>{
        this.setState({showPersons: !this.state.showPersons});
    };
    handleDeletePerson = id => {
        const persons = [...this.state.persons];
        const filteredPerson = persons.filter( p => p.id !== id);
        this.setState({persons:filteredPerson});
    };
    handleNameChange = (event , id) => {
        const {persons : allPersons} = this.state;
        const personIndex = allPersons.findIndex(p => p.id === id);
        const person = allPersons[personIndex];
        person.fullname = event.target.value;
        const persons = [...allPersons];
        persons[personIndex] = person;
        this.setState({persons});

    };
    handleNewPerson = () => {
        const persons = [...this.setState.persons];
        const person = {
            id : Math.floor(Math.random()*100),
            fullname : this.state.person
        };
        persons.push(person);
        this.setState({persons , person:""});
    };
    setPerson = event => {
        this.setState({person : event.target.value});
    }
    render (){
        const {persons , showPersons} = this.state;
        const styles = {
            textAlign :"center"
        }
        let person = null;
        if (showPersons) {
            person = <Persons
             persons={persons}
             personDelete={this.handleDeletePerson}
             personChange={this.handleNameChange}
             
             />;
        }
        // <div style={{textAlign:"center"}}> 
        return (
            <div style={styles }>
                <h1>تعداد اشخاص </h1>
                <h3> تعداد اشخاص {persons.length} می باشد</h3>
                <div>
                    <input type="text" placeholder="ساخت شخص جدید" style={{direction:"rtl"}} onChange={this.setPerson}/>
                    <button onClick={this.handleNewPerson}> اضافه کن</button>
                </div>
                
                <button onClick={this.handleShowPerson} className="btn btn-sm btn-success fa fa-check">نمایش</button>
                {person}
            </div>
        );
    

    }
}
export default App;