const React = require('react');
const render = require('react-dom');
const PropTypes = require('prop-types');

class ColorSwatch extends React.Component {
  render() {
    return (
      <div className={ 'saatva-color-swatch ' + this.props.cssColorName}></div>
    );
  }
}

module.exports = ColorSwatch;
