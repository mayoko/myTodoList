import React from 'react';
import {projectInfoManager} from '../utils/ProjectInfo';

class ProjectComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
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

export default ProjectComponent;