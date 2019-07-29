import React from 'react';
import PropTypes from 'prop-types';
import TodoComponent from './TodoComponent';

const TodoListComponent = ({ todos }) => (
    <ul>
        {
            todos.map((todo, index) => (
                <TodoComponent key={index} {...todo} />
            ))
        }
    </ul>
);

TodoListComponent.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            project_id: PropTypes.number.isRequired
        }).isRequired
    ).isRequired
};

export default TodoListComponent;