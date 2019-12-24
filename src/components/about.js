import React from 'react'

class About extends React.Component<{}, {}> {

  render () {
    return (<div>
        <div className="page-header">About</div>
        <div className="about-paragraph">
        My name is Abdul-Muiz Yusuff. I am a junior Computer Science student at Rensselaer Polytechnic Institute.<br />
        I specialize in making React applications, Unity games and any C++ application you can think of.<br />
        My hobbies include programming, 3D modeling, sprite making and game development.<br />
        I am expected to graduate by May of 2021.
        <div>
          <span className="skill-icon">C++</span>
          <span className="skill-icon">JavaScript</span>
          <span className="skill-icon">React</span>
          <span className="skill-icon">Java</span>
          <span className="skill-icon">C#</span>
          <span className="skill-icon">C</span>
          <span className="skill-icon">Python</span>
        </div>
        </div>
      </div>);
  }
}

export default About;
