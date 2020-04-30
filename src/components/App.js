import React from 'react';
import {AddingItem} from './addingItem/addingItem';
import itemList from './itemList/itemList';
import {ToDoList} from './toDoList/toDoList';
import {EditPopup} from './editPopup/editPopup';
import './App.css';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.addNewItem = this.addNewItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleCheckState = this.toggleCheckState.bind(this);
    }

    state = {
        
        todos: [
            { isDone: false, text: "Learn about JS and React", tag:"JavaScript"},
            { isDone: true, text: "Build cool to do app", tag:"React"} 
        ]
    }

    addNewItem(title, tag) {
        const newToDosArray = [...this.state.todos, {text: title, tag: tag}];
        this.setState({ todos: newToDosArray })
    }

    deleteItem(id) {
        const todos = this.state.todos;

        const newToDosArray = todos.slice(0, id).concat(todos.slice(id + 1, todos.length));
        this.setState({ todos: newToDosArray });
    }

    toggleCheckState(idToReplace) {
        const cloneTodos = this.state.todos;
        
        cloneTodos[idToReplace].isDone = !cloneTodos[idToReplace].isDone;
        this.setState({ todos: cloneTodos });
    }

    render() {
        return (
            <div className="app container">
                <AddingItem addNewItem={this.addNewItem} />
                <ToDoList 
                todos={this.state.todos} 
                handleDeleteItem={this.deleteItem}
                handleToggleCheckState={this.toggleCheckState}
                />
            </div>
        );
    }
}

export default App;
