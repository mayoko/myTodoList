import React from 'react';
import { Menu, Item } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';

const ProjectMenuComponent = (props) => (
    <Menu id={props.id}>
        <Item onClick={() => {console.log("click!");}}>new project</Item>
        <Item onClick={() => {console.log("click!");}}>delete this project</Item>
    </Menu>
);

export default ProjectMenuComponent;