const React = require('react');
const Dialog = require('material-ui/lib/dialog');
const Util = require('./../util.jsx');

const Equation = require('./equation.jsx');
const Answers = require('./answers.jsx');
const Score = require('./score.jsx');

const Quiz = React.createClass({

  ops: {
    'add': '+',
    'sub': '-',
    'mul': 'x',
    'div': '÷',
  },
  
  titles: {
    'add': 'Addition',
    'sub': 'Subtraction',
    'mul': 'Multiplication',
    'div': 'Division',
  },
  
  getInitialState() {
    let state = this.getNewState();
    
    state.total = 0;
    state.score = 0;
    state.streak = 0;
    
    return state;
  },
  
  render() {
    
    return (
      <div className="container" style={{paddingTop: '10px'}}>
        <Dialog
          title={this.state.resultTitle}
          actions={[{ text: 'Next' }]}
          open={this.state.resultOpen}
          ref="resultDialog"
          onRequestClose={this.onResultClose}
          style={{color: '#000'}}>
          <h3>The answer is {this.state.answer}</h3>
        </Dialog>

        <Score score={this.state.score} streak={this.state.streak} total={this.state.total} />
        <h1>{this.titles[this.props.routeParams.op]}</h1>
        <hr />
        <Equation text={this.state.equation} />
        <hr />
        <Answers
          answer={this.state.answer}
          choices={this.state.choices}
          selectedAnswer={this.state.selectedAnswer}
          onClick={this.handleAnswerClick} />
      </div>
    );
  },
  
  handleAnswerClick(answer) {
    let state = {
      selectedAnswer: answer,
      resultOpen: true,
      total: this.state.total + 1,
    };    

    if (answer === this.state.answer) {
      state.resultTitle = "Correct!";
      state.score = this.state.score + 1;
      state.streak = this.state.streak + 1;
    } else {
      state.resultTitle = "Fail!";
      state.streak = 0;
    }
    
    this.setState(state);
  },
  
  onResultClose() {
    this.setState(this.getNewState());
  },
  
  getNewState() {
    let state = Util.getNewEquation(
      this.ops[this.props.routeParams.op],
      parseInt(this.props.routeParams.min),
      parseInt(this.props.routeParams.max));
    
    
    state.selectedAnswer = null;
    state.resultOpen = false;
    state.resultTitle = "";

    return state;
  },

});

module.exports = Quiz;