import NavBar from "./NavBar";

function Projects() {
  return (
    <div className="page">
      <NavBar />
      <section className="projects-section">
        <h1 style={{ color: "#F1BFAE" }}>Projects & Skills</h1>

        {/* PrinterForm Project */}
        <div className="project">
          <div className="project-header">
            <h2>PrinterForm Design Research</h2>
            <h4>2024 – Present</h4>
          </div>
          <div className="project-content-wrapper">
            <div className="project-content">
              <ul>
                <li>
                  CAD (Computer Aided Design) and 3D printing have become
                  essential tools in design and engineering. PrinterForm gives
                  anyone with an internet connection and an inkjet or laser
                  printer the ability to make low fidelity 3D prints. Simply
                  upload your model, select your form, print, and fold.
                  PrinterForm also provides resources and lessons for creating
                  and translating your CAD files into physical objects.
                </li>
                <li>
                  <strong>Technologies used:</strong> React, JavaScript, CSS.
                </li>
                <li>
                  <a
                    href="https://printerform1.github.io/printerForm1.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit PrinterForm Website
                  </a>
                </li>
              </ul>
            </div>
            <div className="project-image">
              <img src="public/Printerformlogo.png" alt="PrinterForm project" />
            </div>
          </div>
        </div>

        {/* Portfolio Website Project */}
        <div className="project">
          <div className="project-header">
            <h2>Portfolio Website</h2>
            <h4>Ongoing</h4>
          </div>
          <div className="project-content">
            <ul>
              <li>
                Designed detailed mockups of a personal portfolio website in
                Figma, focusing on layout, color scheme, and UI elements.
                Translated the design into a fully responsive website using
                HTML, CSS, and JavaScript.
              </li>
              <li>
                <strong>Technologies used:</strong> React, JavaScript, CSS,
                Github Pages, Figma.
              </li>
            </ul>
          </div>
          <div className="project-image">
            <img src="public/SL.png" alt="Personal project" />
          </div>
        </div>

        {/* Graphics Project */}
        <div className="project">
          <div className="project-header">
            <h2>Pixar's Up Scene Recreation – Graphics Project</h2>
            <h4>2024</h4>
          </div>
          <div className="project-content">
            <ul>
              <li>
                Created a realistic high-altitude scene of the house from
                Pixar's Up film floating away. Created the model in Blender, usedbump mapping for house details,
                Bezier curve camera motion, a large skybox, and physics for
                house swaying in the wind.
              </li>
              <li>
                <strong>Technologies used:</strong> Blender, OpenGL, C++.
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1Lk-QV7-OH6Kfgw3Yeii02vOwi74cvJ48/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Final Demo Video
                </a>
              </li>
            </ul>
          </div>
          <div className="project-image">
            <img src="public/house.png" alt="Graphics project" />
          </div>
        </div>

        {/* ASL Translator Project */}
        <div className="project">
          <div className="project-header">
            <h2>ASL Translator – Computer Vision Project</h2>
            <h4>2024</h4>
          </div>
          <div className="project-content">
            <ul>
              <li>
                Developed a Computer Vision program to capture images from a
                camera using OpenCV and perform image classification using a
                pre-trained VGG model. The prediction is presented to the user,
                effectively translating ASL gestures into the english alphabet.
              </li>
              <li>
                <strong>Technologies used:</strong> Python, OpenCV, TensorFlow,
                VGG16, NumPy, SciPy.
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1wyCB8o1kB-Rb5MeSmbb-n2sTQX9ZHtAj/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Final Project Poster
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jjchilling/ASL-Translator.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository
                </a>
              </li>
            </ul>
          </div>
          <div className="project-image">
            <img src="public/ASL.png" alt="CV project" />
          </div>
        </div>

        {/* Brown Books Project */}
        <div className="project">
          <div className="project-header">
            <h2>Brown Books – Book Recommendation Software</h2>
            <h4>2024</h4>
          </div>
          <div className="project-content">
            <ul>
              <li>
                Developed a full-stack web application to recommend books to
                users based on their personal profiles and preferences.
                Integrated with the Open Library API for book search and
                implemented personalized recommendations using machine learning.
              </li>
              <li>
                <strong>Technologies used:</strong> React, CSS, Java, Firebase,
                JSON, Open Library API.
              </li>
            </ul>
          </div>
          <div className="project-image">
            <img src="public/BrownBooks.png" alt="CV project" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
