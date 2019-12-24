import React from 'react'
import {withRouter} from 'react-router-dom'

class Contact extends React.Component<{},{}> {

  render () {
    return (<div>
        <div className="page-header">Contact</div>
        <div className="email-input"><input type="text" placeholder="contact@email.com" /></div>
        <div className="email-textarea"><textarea placeholder="email..."></textarea></div>
        <div className="email-submit"><button className="magic-btn">SEND</button></div>

      </div>);
  }

}

export default Contact
