import React from 'react';
import ProjectComponent from './ProjectComponent';
import ProjectDescriptionComponent from './ProjectDescriptionComponent';
import Modal from 'react-modal';

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
Modal.setAppElement('body');

class ProjectPageComponent extends React.Component {
    constructor(props) {
        super(props)
        this.root_project_id = "0";
        this.handleProjectDescription = this.handleProjectDescription.bind(this);
        this.state = {
            project_id : "0",
            modalIsOn  : false,
            // modal
            modalIsOpen : false
        };

        // modal
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen : true});
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen : false});
    }

    render() {
        return (
            <div class="project">
                <button onClick={this.openModal}>Open Modal</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
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
                        <button>add project</button>
                    </form>
                    <button onClick={this.closeModal}>close</button>
                </Modal>
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