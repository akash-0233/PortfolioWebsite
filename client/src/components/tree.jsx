import './tree.css';

const ProjectTree = () => {
  return (
    <div className="tree-container">
      <h2>My Work Experience</h2>
      <div className="tree">
        <ul>
          <li>
            <span id='btn' className="caret">Projects</span>
            <ul className="nested">
              <li  className='card'>
                <span className="caret">Project 1</span>
                <ul className="nested">
                  <li>Description: A web app using React</li>
                  <li>Technologies: React, CSS, Node.js</li>
                  <li>Link: <a href="#">View Project</a></li>
                </ul>
              </li>
              <li className='card'>
                <span className="caret">Project 2</span>
                <ul className="nested">
                  <li>Description: An e-commerce platform</li>
                  <li>Technologies: MERN Stack</li>
                  <li>Link: <a href="#">View Project</a></li>
                </ul>
              </li>
              <li className='card'>
                <span className="caret">Project 3</span>
                <ul className="nested">
                  <li>Description: A portfolio website</li>
                  <li>Technologies: React, CSS</li>
                  <li>Link: <a href="#">View Project</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <span className="caret">Freelancing Work</span>
            <ul className="nested">
              <li className='card'>
                <span className="caret">Freelancing Project 1</span>
                <ul className="nested">
                  <li>Description: Developed a custom CMS</li>
                  <li>Technologies: PHP, MySQL, JavaScript</li>
                  <li>Link: <a href="#">View Project</a></li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectTree;
