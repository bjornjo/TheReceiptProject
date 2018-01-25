import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import actions from './../redux/actions';
import Main from './main/Main';

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;