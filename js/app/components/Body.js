import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleOnSubmit(event) {
        event.preventDefault();
        const email = ReactDOM.findDOMNode(this.refs.email).value;
        const password = ReactDOM.findDOMNode(this.refs.password).value;
        console.log(email);
        console.log(password);
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <div className="row">
                    <label htmlFor="email">{this.props.cat}</label>
                    <input id="email" type="email" ref="email" className="form-control" placeholder="E-Mail"/>
                </div>
                <div className="row">
                    <input type="password" ref="password" className="form-control" placeholder="password"/>
                </div>
                <div className="row">
                    <input type="submit" value="Login" className="btn btn-primary"/>
                </div>
            </form>
        );
    }
}

Body.propTypes = {
    cat: PropTypes.string.isRequired
};

Body.defaultProps = {
    cat: 'Login Page',
};