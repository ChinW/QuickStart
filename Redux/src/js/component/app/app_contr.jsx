import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './app_act';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app">
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.app;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}
export const AppContainer  = connect(mapStateToProps, mapDispatchToProps)(App);

