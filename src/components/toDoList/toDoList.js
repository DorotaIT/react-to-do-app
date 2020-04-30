import React, {Component} from "react";
import {ItemList} from '../itemList/itemList';
import "./toDoList.css";

export class ToDoList extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <ul className="todo-list list-group">
                {this.props.todos.map((todo, index) => (
                    <ItemList 
                    key={index} 
                    id={index} 
                    item={todo}
                    handleDeleteItem={this.props.handleDeleteItem}
                    handleToggleCheckState={this.props.handleToggleCheckState}
                    />
                ))}
            </ul>
        )
    }
}