import React from 'react'
import ProjectData from '../data/projects_preview.json'

class Portfolio extends React.Component<{}, {}> {

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
              {"github_repo" in project_info && <button className="ghub-repo" onClick={() => { var win = window.open(project_info.github_repo, '_blank'); win.focus(); }}>github</button>}
              {"external_link" in project_info &&  <button className="explore" onClick={() => { var win = window.open(project_info.external_link, '_blank'); win.focus(); }}>explore</button>}
            </div>
            </div>
          </div>
        </div>
      </div>);
    });
  }

  render () {
    return (<div>
        <div className="page-header">Projects</div>
        {this.renderProjectData()}
      </div>);
  }
}

export default Portfolio;
