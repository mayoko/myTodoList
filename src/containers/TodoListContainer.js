import { connect } from 'react-redux';
import TodoListComponent from '../components/TodoListComponent';

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent);

export default TodoListContainer;