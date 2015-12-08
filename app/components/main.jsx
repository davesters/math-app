const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const DarkTheme = require('../theme');

const Main = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DarkTheme),
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  buttonStyle: {
    width: '80%',
    height: 'auto',
    margin: '0 0 12px',
  },
  
  buttonLabelStyle: {
    fontSize: '2em',
    display: 'block',
    padding: '20px 12px',
    lineHeight: '1em',
    fontWeight: 'normal',
  },
  
  render() {

    return (
      <div className="container" style={{paddingTop: '50px'}}>
        <h1>Math Practice</h1>
        <hr />

        <RaisedButton
          label="Addition"
          primary={true}
          style={this.buttonStyle}
          labelStyle={this.buttonLabelStyle}
          onTouchTap={this.handleAddTap} />
        <RaisedButton
          label="Subtraction"
          primary={true}
          style={this.buttonStyle}
          labelStyle={this.buttonLabelStyle}
          onTouchTap={this.handleSubTap} />
        <RaisedButton
          label="Multiplication"
          primary={true}
          style={this.buttonStyle}
          labelStyle={this.buttonLabelStyle}
          onTouchTap={this.handleMultTap} />
        <RaisedButton
          label="Division"
          primary={true}
          style={this.buttonStyle}
          labelStyle={this.buttonLabelStyle}
          onTouchTap={this.handleDivTap} />

      </div>
    );
  },

  handleAddTap() {
    window.location.hash = '/quiz/add/1/20';
  },

  handleSubTap() {
    window.location.hash = '/quiz/sub/1/20';
  },

  handleMultTap() {
    window.location.hash = '/quiz/mul/1/12';
  },

  handleDivTap() {
    window.location.hash = '/quiz/div/1/20';
  },

});

module.exports = Main;