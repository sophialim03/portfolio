import NavBar from "./NavBar";
import brownLogo from "/public/Brown-University-Symbol.png";
import macLogo from "/public/Macleans_College_logo.png";

function Education() {
  return (
    <div className="education-page">
      <NavBar />
      <section className="education-section">
        <h1 style={{ color: "#DEC2FD" }}>Education</h1>

        {/* Brown University Section */}
        <div className="institution">
          <div className="institution-details">
            <h2>Brown University</h2>
            <h4>BS in Computer Science & Economics</h4>
            <h4>Providence, RI, United States</h4>
            <h4>2022 - 2026</h4>

            <h3>Course Work:</h3>
            <ul>
              <li>
                <strong>Computer Science:</strong> Program Design with Data
                Structures and Algorithms; Software Engineering; Computer
                Vision; Computer Systems; Object-Oriented Programming; Computer
                Graphics; Simulating Reality; Digital 2D Design.
              </li>
              <li>
                <strong>Mathematics:</strong> Multivariable Calculus; Linear
                Algebra; Statistical Inferences; Statistical Methods.
              </li>
              <li>
                <strong>Economics and Business:</strong> Mathematical
                Microeconomics; Macroeconomics; Management of Industrial and
                Nonprofit Organizations; Making Decisions.
              </li>
            </ul>

            <h3>Activities and Societies:</h3>
            <ul>
              <li>
                Class Coordinating Board ’26 Vice President (Student Government)
              </li>
              <li>Women in Science and Engineering Mentor</li>
              <li>Brown Entrepreneurship Program – StartUp @ Brown</li>
              <li>Meiklejohn Peer Advisor</li>
              <li>Brown University Cheerleading</li>
            </ul>
          </div>
          <img src={brownLogo} alt="Brown University Logo" className="logo" />
        </div>

        {/* Macleans Section */}
        <div className="institution">
          <div className="institution-details">
            <h2>Macleans College</h2>
            <h4>Auckland, New Zealand</h4>
            <h4>2017 - 2021</h4>

            <h3>Course Work:</h3>
            <ul>
              <li>
                CAIE A Level Physics (A*), CAIE A Level Mathematics (A*), CAIE A
                Level English Literature (A*), CAIE A Level Economics (A), CAIE
                AS Level Business (A), Pearson Edexcel AS Level Psychology (A),
                NZQA Scholarship English (Top 3% in country).
              </li>
            </ul>

            <h3>Activities and Societies:</h3>
            <ul>
              <li>Student Representative on Board of Trustees</li>
              <li>School Prefect</li>
              <li>House Captain</li>
              <li>Duke of Edinburgh Gold</li>
              <li>Peer Support Mentor</li>
              <li>Tiger Global Case Competition (1st in Oceania)</li>
              <li>National Secondary Schools Business Case Comp (#2/80);</li>
              <li>Cheerleading Captain and Coach</li>
              <li>Aerobics Coach</li>
              <li>Academic Tutor</li>
              <li>Art club leader</li>
            </ul>
          </div>
          <img src={macLogo} alt="Brown University Logo" className="logo" />
        </div>
      </section>
    </div>
  );
}

export default Education;
