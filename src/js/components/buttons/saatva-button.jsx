const React = require('react');
const render = require('react-dom');
const PropTypes = require('prop-types');

class SaatvaButton extends React.Component {

    constructor(props) {
        super(props);

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);

        // Typechecking props
        this.propTypes = {
            buttonText: PropTypes.string.isRequired,
            eventHandler: PropTypes.func,
            addlCssClass: PropTypes.string
        };
    }

    handleClick() {
        if (this.props.eventHandler) {
            this.props.eventHandler();
        }
    }

    render() {
        return (
            <button className={ 'saatva-button ' + this.props.addlCssClass} onClick={ this.handleClick }>{ this.props.buttonText }</button>
        );
    }
}

module.exports = SaatvaButton;
