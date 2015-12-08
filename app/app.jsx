(function () {
  let ReactRouter = require('react-router');
  let React = require('react');
  let ReactDOM = require('react-dom');
  let injectTapEventPlugin = require('react-tap-event-plugin');
  
  let Main = require('./components/main.jsx');
  let Quiz = require('./components/quiz.jsx');
  
  //Needed for React Developer Tools
  window.React = React;

  injectTapEventPlugin();

  // function onDeviceReady() {
    ReactDOM.render((
      <ReactRouter.Router>
        <ReactRouter.Route path="/" component={Main} />
        <ReactRouter.Route path="/quiz/:op/:min/:max" component={Quiz} />
      </ReactRouter.Router>
    ), document.getElementById('app'));
  // }
  
  // document.addEventListener('deviceready', onDeviceReady, false);
})();