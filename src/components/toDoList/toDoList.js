import React, {Component} from "react";
import {ItemList} from '../itemList/itemList'
import "./toDoList.css";

export class ToDoList extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <ul className="todo-list list-group">
                {this.props.todos.map((todo, index) => (
                    <ItemList key={index} title={todo.text} tags={todo.tag}/>
                ))}
            </ul>
        )
    }
}