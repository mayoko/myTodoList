import React from 'react';
import {projectInfoManager} from '../utils/ProjectInfo';

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

export default ProjectDescriptionComponent;