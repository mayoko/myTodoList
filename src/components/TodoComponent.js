import React from 'react';
import PropTypes from 'prop-types';

const TodoComponent = ({ id, title, project_id }) => (
    <li>
        {title}
    </li>
);

TodoComponent.propTypes = {
    title: PropTypes.string.isRequired
};

export default TodoComponent;