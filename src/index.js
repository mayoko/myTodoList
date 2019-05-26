import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './ProjectInfo';
import { projectInfoManager } from './ProjectInfo';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div class="header">
                <h1>Hello, World</h1>
            </div>
        );
    }
}

class TaskComponent extends React.Component {
    render() {
        return (
            <div class="task">
                <h2>tasks</h2>
            </div>
        )
    }
}

class ProjectPageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.root_project_id = "0";
        this.handleProjectDescription = this.handleProjectDescription.bind(this);
        this.state = {
            project_id : "0"
        };
    }
    render() {
        return (
            <div class="project">
                <ProjectComponent
                    project_id={this.root_project_id}
                    handleProjectDescription={this.handleProjectDescription}
                />
                <ProjectDescriptionComponent
                    project_id={this.state.project_id}
                />
            </div>
        );
    }

    handleProjectDescription(project_id) {
        this.setState({project_id : project_id});
    }
}

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        const project_id = props.project_id;
        const project = projectInfoManager.get(project_id);
        const children = projectInfoManager.getChildren(project_id);
        this.onClick = this.onClick.bind(this);
        this.onDoubleClick = this.onDoubleClick.bind(this);
        this.state = {
            title: project.title,
            children : children,
            hidden : false
        };
    }

    render() {
        return (
            <div>
                <div
                    onClick={this.onClick}
                    onDoubleClick={this.onDoubleClick}
                >
                    <span>{this.state.title}</span>
                </div>
                <ul class={this.state.hidden ? "hide" : ""}>
                    {this.renderChildren()}
                </ul>
            </div>
        )
    }

    renderChildren() {
        if (!this.state.children || this.state.hidden) {
            return null;
        }
        return (
            <ul class="">
                {
                    this.state.children.map((project_id) => {
                        return (
                            <ProjectComponent
                                project_id={project_id}
                                handleProjectDescription={this.props.handleProjectDescription}
                            />
                        )
                    })
                }
            </ul>
        );
    }

    onClick() {
        const hidden = this.state.hidden;
        this.setState({hidden : !hidden});
    }

    onDoubleClick() {
        console.log(this.props.handleProjectDescription);
        this.props.handleProjectDescription(this.props.project_id);
    }
}

class ProjectDescriptionComponent extends React.Component {
    render() {
        const text = projectInfoManager.get(this.props.project_id).text;
        return (
            <div>
                <h2>Project description</h2>
                <div>{text}</div>
            </div>
        );
    }
}

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

ReactDOM.render(
    <TodoListComponent />,
    document.getElementById('root')
);