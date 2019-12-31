import React from 'react'
import ProjectData from '../data/projects_preview.json'

class Portfolio extends React.Component<{}, {}> {

  constructor(props) {
    super(props)
    this.state = {
      popup_visible: false,
      demo_info: "<load>",
      demo_link: "<link>",
      demo_name: "<name>"
    }
  }

  languageToIcon = (language) => {
    switch(language.toLowerCase()) {
      case "reactjs":
        return (<div className="language-icon"><i class="icon-react"></i></div>);
      case "angularjs":
        return (<div className="language-icon"><span class="icon-angular"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></div>);
      case "c":
        return (<div className="language-icon"><span class="icon-c"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span></div>);
      case "c++":
        return (<div className="language-icon"><span class="icon-c1"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></span></div>);
      case "java":
        return (<div className="language-icon"><span class="icon-java"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></span></div>);
      case "javascript":
        return (<div className="language-icon"><span class="icon-javascript"><span class="path1"></span><span class="path2"></span></span></div>);
      case "nodejs":
        return (<div className="language-icon"><i class="icon-node"></i></div>);
      case "python":
        return (<div className="language-icon"><i class="icon-python"></i></div>);
      case "vuejs":
        return (<div className="language-icon"><span class="icon-vue"><span class="path1"></span><span class="path2"></span></span></div>);
      default:
        return;
    }
  }

  renderProjectData = () => {
    return ProjectData.projects.map((project_info, i) => {
      return (<div className="project-info-preview">
        <div className="row">
          <div className="folder-icon"><i class="icon-folder"></i></div>
          <div className="project-name">{"name" in project_info ? project_info.name : "<unnamed project>"}</div>
        </div>
        <div>
          <div className="row">
            <div className="gray-buffer">
              { "stack" in project_info && project_info.stack.map((stack_item) => this.languageToIcon(stack_item)) }
            </div>
            <div className="project-description">
            {"description" in project_info ? project_info.description : "<empty description>"}

            <div className="explore-row">
              {"demo" in project_info && <button className="demo-btn" onClick={() => { this.openDemoPopupWithPrompt("name" in project_info ? project_info.name : "<No name provided>", "demo_info" in project_info ? project_info["demo_info"] : "<no info provided>", project_info["demo"] ) }}>demo</button>}
              {"github_repo" in project_info && <button className="ghub-repo" onClick={() => { var win = window.open(project_info.github_repo, '_blank'); win.focus(); }}>github</button>}
              {"external_link" in project_info &&  <button className="explore" onClick={() => { var win = window.open(project_info.external_link, '_blank'); win.focus(); }}>explore</button>}
            </div>
            </div>
          </div>
        </div>
      </div>);
    });
  }

  openDemoPopupWithPrompt = (name_, demo_info_, demo_link_) => {
    this.setState({
      demo_info: demo_info_,
      demo_link: demo_link_,
      demo_name: name_,
      popup_visible: true
    })
  }

  render () {
    return (<div>
        <div className="page-header">Projects</div>
        {
          this.state.popup_visible && <div className="demo-popup">
            <div className="demo-header">
              <div className="demo-title">{ this.state.demo_name }</div>
              <button className="close-btn" onClick={() => { this.setState({popup_visible: false}) }}>close</button>
            </div>
            <div>{ this.state.demo_info }</div>
            <button className="demo-btn demo-btn-check" onClick={() => { var win = window.open(this.state.demo_link, '_blank'); win.focus(); }}>Check out Demo</button>
          </div>
        }
        {this.renderProjectData()}
      </div>);
  }
}

export default Portfolio;
