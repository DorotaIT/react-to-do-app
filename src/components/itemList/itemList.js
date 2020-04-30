import React, {Component} from 'react';
import "./itemList.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCircle, faCheckCircle, faEdit } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ItemList extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.toggleCheckState = this.toggleCheckState.bind(this);
    }

    deleteItem() {
        this.props.handleDeleteItem(this.props.id);
    }

    toggleCheckState() {
        this.props.handleToggleCheckState(this.props.id);
    }

    render() {
        const { isDone, text, tag } = this.props.item;

        return (
            <li className="list-group-item">
                <div className="btn"
                    onClick={this.toggleCheckState}
                >
                    <FontAwesomeIcon
                    icon={ isDone ? faCheckCircle : faCircle }
                    />
                </div>
                {text} &nbsp;
                <span className="font-weight-bold">
                    {tag.toUpperCase()}
                </span>
                <div className="btn float-right">
                    <span className="delete-button">
                        <FontAwesomeIcon 
                        icon={faTrash} 
                        color={"red"} 
                        onClick={this.deleteItem}
                        />
                    </span>
                </div>
                <div className="btn float-right">
                    <FontAwesomeIcon
                    icon={faEdit}
                    />
                </div>
            </li>
        );
    }
}