var React = require('react');
var ReactDOM = require('react-dom');

var HelloComponent = React.createClass({
  render: function() {
    return (
      <div>
        Hello, React!
      </div>
    );
  }
});

ReactDOM.render(<HelloComponent />, document.getElementById('app'));
