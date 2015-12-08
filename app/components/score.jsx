const React = require('react');

const Score = React.createClass({

  render() {
    
    return (
      <div className="score-box">
        <h2 className="streak">Streak: {this.props.streak}</h2>
        <h2 className="score">Score: {this.props.score} of {this.props.total}</h2>
      </div>
    );
  },

});

module.exports = Score;