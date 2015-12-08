const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');

const Answers = React.createClass({

  buttonStyle: {
    width: '44%',
    margin: '12px 2%',
    height: 'auto',
  },
  
  buttonLabelStyle: {
    fontSize: '3.5em',
    display: 'block',
    padding: '20px 16px',
    lineHeight: '1em',
  },

  render() {
    let self = this;
    let answer = this.props.answer;
    let selectedAnswer = this.props.selectedAnswer;
    let choices = this.props.choices;
    
    return (
      <div className="answers">
        {choices.map(function(choice) {
          let primary = false;
          let secondary = false;
          
          if (choice === selectedAnswer) {
            if (choice === answer) {
              secondary = true;
            } else {
              primary = true;
            }
          }
          
          return <RaisedButton 
            key={choice}
            label={choice}
            primary={primary}
            secondary={secondary}
            style={self.buttonStyle}
            labelStyle={self.buttonLabelStyle}
            onTouchTap={self.handleAnswerClick} />
        })}
      </div>
    );
  },
  
  handleAnswerClick(event) {
    let target = event.target;
    let ans = target.innerHTML;
    
    this.props.onClick(ans);
  },

});

module.exports = Answers;