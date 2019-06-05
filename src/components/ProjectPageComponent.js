import React from 'react';
import ProjectComponent from './ProjectComponent';
import ProjectDescriptionComponent from './ProjectDescriptionComponent';

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

export default ProjectPageComponent;