import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ProjectPageComponent from '../components/ProjectPageComponent';
import TaskComponent from '../components/TaskComponent';

class TodoListComponent extends React.Component {
    render() {
        return (
            <div class="content">
                <HeaderComponent />
                <div class="container">
                    <ProjectPageComponent/>
                    <TaskComponent/>
                </div>
            </div>
        );
    }
}

export default TodoListComponent;