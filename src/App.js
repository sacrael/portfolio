import React from 'react';
import logo from './logo.svg';
import './css/App.css';

class App extends React.Component<{},{}> {

  constructor(props: any) {
    super(props)
  }

  render () {
    return (<div>
        App Page
        <button onClick={() => { this.props.history.push('/test') }}>Test it Out</button>
      </div>);
  }

}

export default App;
