import React from 'react'
import {withRouter} from 'react-router-dom'

class Contact extends React.Component<{},{}> {

  constructor(props) {
    super(props)
    this.emailRef = React.createRef()
  }

  sendMail = () => {
    if (this.emailRef.current) {

        let body_ = this.emailRef.current.value.split(" ").join("+")
        window.open(`mailto:muiz.rpi@gmail.com?subject=[muiz.dev] Contact&body=${this.emailRef.current.value}`);
    }
  }



  render () {
    return (<div>
        <div className="page-header">Contact</div>
        <div className="email-input"><input type="text" placeholder="contact@email.com" /></div>
        <div className="email-textarea"><textarea placeholder="email..." ref={this.emailRef}></textarea></div>
        <div className="email-submit"><button className="magic-btn" onClick={() => {this.sendMail()}}>SEND</button></div>

      </div>);
  }

}

export default Contact
