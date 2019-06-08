import React from 'react';
import Modal from 'react-modal';
import {projectInfoManager} from '../utils/ProjectInfo';

const customStyles = {
    content : {
        top        : '0%',
        left       : '50%',
        right      : 'auto',
        bottom     : 'auto',
        marginright: '-50%',
        transform  : 'translate(-50%, 50%'
    }
};

class ProjectAddModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project_name_text : "",
            project_detail_text : "",
            parent_project_id : props.parent_project
        };
    }
    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Modal Add Modal"
            >
                <h2>Add Project</h2>
                <form>
                    <p><label>
                        project name : <input type="text" name="project_name" value={this.state.project_name_text} onChange={(e) => this.setState({project_name_text : e.target.value})} />
                    </label></p>
                    <p>project detail :</p>
                    <p><label>
                        <textarea name="project_detail" rows="4" cols="40" value={this.state.project_detail_text} onChange={(e) => this.setState({project_detail_text : e.target.value})} />
                    </label></p>
                    <p>under the project :
                        <select name="parent_project" value={this.state.parent_project_id}>
                            {this.renderSelectParentProject()}
                        </select>
                    </p>
                    <button>add project</button>
                </form>
                <button onClick={this.props.handleCloseModal}>close</button>
            </Modal>
        );
    }
    renderSelectParentProject() {
        const options = projectInfoManager.getAll().map((project) => {
            return <option value={project.id} key={project.id}>{project.title}</option>
        })
        return options;
    }
}

export default ProjectAddModal;