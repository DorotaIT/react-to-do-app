import React from 'react';
import {AddingItem} from './addingItem/addingItem';
import itemList from './itemList/itemList';
import {ToDoList} from './toDoList/toDoList';
import './App.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.addNewItem = this.addNewItem.bind(this);
    }

    state = {

        todos: [
            { text: "Learn about JS and React", tag:"JavaScript"},
            { text: "Build cool to do app", tag:"React"} 
        ]
    }

    addNewItem(title, tag) {
        const newToDosArray = [...this.state.todos, {text: title, tag: tag}];
        this.setState({ todos: newToDosArray })
        console.log(title);
        console.log(tag);
    }

    render() {
        return (
            <div className="app container">
                <AddingItem addNewItem={this.addNewItem} />
                <ToDoList todos={this.state.todos} />
            </div>
        );
    }
}

export default App;
