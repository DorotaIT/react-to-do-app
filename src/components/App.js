import React from 'react';
import addingItem from './addingItem/addingItem';
import itemList from './itemList/itemList';
import toDoList from './toDoList/toDoList';

class App extends React.Component {
    state = {
        todos: [
            { text: "Learn about JS and React"},
            { text: "Build cool to do app"}
        ]
    }

    setTodos = todos => this.setState({ todos });

    render() {
        return (
            <div></div>
        );
    }
}

export default App;
