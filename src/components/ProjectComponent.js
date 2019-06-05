import React from 'react';
import {projectInfoManager} from '../utils/ProjectInfo';
import ProjectMenuComponent from './ProjectMenuComponent';
import { MenuProvider } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

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
                <MenuProvider id={"project_menu_id" + this.props.project_id} style = {{border: '1px solid purple', display: 'inline-block'}}>
                    <div
                        onClick={this.onClick}
                        onDoubleClick={this.onDoubleClick}
                    >
                        <span>{this.state.title}</span>
                    </div>
                    <ul class={this.state.hidden ? "hide" : ""}>
                        {this.renderChildren()}
                    </ul>
                </MenuProvider>
                <ProjectMenuComponent id={"project_menu_id" + this.props.project_id}/>
            </div>
        );
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
                            <ProjectComponent key={project_id}
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
        this.props.handleProjectDescription(this.props.project_id);
    }
}

export default ProjectComponent;