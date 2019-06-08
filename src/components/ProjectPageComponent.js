import React from 'react';
import ProjectComponent from './ProjectComponent';
import ProjectDescriptionComponent from './ProjectDescriptionComponent';
import Modal from 'react-modal';
import ProjectAddModal from './ProjectAddModal';

Modal.setAppElement('body');

class ProjectPageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.root_project_id = "0";
        this.handleProjectDescription = this.handleProjectDescription.bind(this);
        this.state = {
            project_id : "0",
            modalIsOpen : false
        };

        // modal
        this.openModal = this.openModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen : true});
    }
    handleCloseModal() {
        this.setState({modalIsOpen : false});
    }

    render() {
        return (
            <div class="project">
                <button onClick={this.openModal}>Open Modal</button>
                <ProjectAddModal
                    modalIsOpen={this.state.modalIsOpen}
                    handleCloseModal={this.handleCloseModal}
                />
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