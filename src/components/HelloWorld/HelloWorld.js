import PropTypes from 'prop-types'

const React = require('react')

class HelloWorld extends React.Component {

    render() {
        const classes = 'helloWorld ' + this.props.cssClass
        const message = this.props.message

        return (
            <p className={classes}>Hello, {message}</p>
        )
    }
}

HelloWorld.propTypes = {
    cssClass: PropTypes.string,
    message: PropTypes.string
}

HelloWorld.defaultProps = {
    cssClass: '',
    message: 'World'
}

export default HelloWorld