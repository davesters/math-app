const React = require('react');

const Equation = React.createClass({

  render() {
    let text = this.props.text;
    
    return (
      <div className="equation">
        <p>{text}</p>
      </div>
    );
  },

});

module.exports = Equation;