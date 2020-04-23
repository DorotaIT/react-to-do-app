import React, {Component} from 'react';
import "./addingItem.css";

export class AddingItem extends Component {
    state = { titleInputValue: '' };

    constructor(props) {
        super(props);
        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        const title = this.state.titleInputValue;
        this.props.addNewItem(title, "default");
    }

    render() {
        return (
                <form 
                    className="to-do-form input-group mb-4 mt-5">
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Wpisz zadanie..."
                            value={this.state.titleInputValue}
                            onChange={(event) => this.setState({ titleInputValue: event.target.value})}
                        />
                        <button 
                            className="btn btn-outline-secondary" 
                            onClick={this.addTask} 
                            type="button">
                            Dodaj
                        </button>
                </form>
        )
    }
}