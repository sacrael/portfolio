import React from 'react'
import {withRouter} from 'react-router-dom'

class Navarea extends React.Component<{}, {}> {

  constructor (props: any) {
    super (props)
    this.isPage("")
  }

  isPage = (page_name) => {
    let page = window.location.href
    let reversed = page.split("").reverse().join("")
    reversed = reversed.substring(0, reversed.indexOf("/"))
    page = reversed.split("").reverse().join("")
    return page == "" ? page_name == "portfolio" : page_name.toLowerCase() == page
  }

  render () {
    return (<div className="muiz-navarea">
      <div className="logo">M</div>
      <div className="pagelinks">
        <ul>
          <a onClick={ (e) => { e.preventDefault(); this.props.history.push('/portfolio'); } } className={`${ this.isPage("portfolio") ? "active" : "" }`}><li><i class={`icon-portfolio`} alt="Portfolio"></i></li></a>
          <a onClick={ (e) => { e.preventDefault(); this.props.history.push('/about'); } } className={`${ this.isPage("about") ? "active" : "" }`}><li><i class={`icon-question-mark`} alt="About"></i></li></a>
          <a onClick={ (e) => { e.preventDefault(); this.props.history.push('/contact'); } } className={`${ this.isPage("contact") ? "active" : "" }`}><li><i class={`icon-contact`} alt="Contact"></i></li></a>
        </ul>
      </div>
      <div className="social-btns">
        <button className="github" onClick={() => { var win = window.open("https://github.com/sacrael", '_blank'); win.focus(); }}><i class="icon-github-logo"></i></button>
      </div>
    </div>);
  }

}

export default withRouter(Navarea)
