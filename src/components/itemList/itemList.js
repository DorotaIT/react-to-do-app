import React, {Component} from 'react';
import "./itemList.css";

export class ItemList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <li className="list-group-item">
                {this.props.title}, &nbsp;
                <span className="font-weight-bold">{this.props.tags.toUpperCase()}</span>
            </li>
        );
    }
}