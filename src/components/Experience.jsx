import NavBar from "./NavBar";

function Experience() {
  return (
    <div className="page">
      <NavBar />
      <section className="work-experience-section">
        <h1 style={{ color: "#519EE6" }}>Work Experience</h1>

        {/* KPMG Experience */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>Digital Innovation and Consulting Intern</h2>
            <h4>KPMG</h4>
            <h4>July 2023 – Aug 2023 | July 2024 - Aug 2024</h4>
          </div>
          <div className="experience-content">
            <ul>
              <li>
                Drove cross-functional collaboration across Consulting, Data
                Analytics, and Engineering to develop technology-driven
                solutions for client and internal challenges.
              </li>
              <li>
                Identify customers' unmet needs and market opportunities for
                tool or feature enhancements through quantitative and
                qualitative analyses.
              </li>
              <li>
                Prototyped technical solutions in Figma, enabling clients to
                visualize project concepts and identify opportunities for future
                scalability.
              </li>
            </ul>
          </div>
        </div>

        {/* TA Experience */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>Computer Science Teaching Assistant</h2>
            <h4>Brown University</h4>
            <h4>Aug 2023 – Dec 2024</h4>
          </div>
          <div className="experience-content">
            <ul>
              <li>
                Teaching Assistant for:
                <ul>
                  <li>CSCI0150: Object-Oriented Programming</li>
                  <li>
                    CSCI0200: Program Design with Data Structures and Algorithms
                  </li>
                  <li>CSCI0320: Software Engineering</li>
                </ul>
              </li>
              <li>
                Led 3+ weekly office hours and 2-hour lab sessions, supporting
                450+ students in mastering Java, Python, and JavaScript
                concepts.
              </li>
              <li>
                Directed project management for student software projects,
                holding weekly mentor meetings to provide formative feedback.
              </li>
            </ul>
          </div>
        </div>

        {/* SM Experience */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>Business Intern</h2>
            <h4>Soul Machines</h4>
            <h4>Dec 2020 – Aug 2022</h4>
          </div>
          <div className="experience-content">
            <ul>
              <li>
                Customized and developed industry-specific AI Digital People
                demonstrations, empowering business partners with unique
                resources and facilitating high-level engagements with C-suite
                executives.
              </li>
              <li>
                Generated a database of 300+ qualified leads for the Channel
                Partnerships team by researching global companies aligned with
                our strategic goals.
              </li>
              <li>
                Enhanced operational efficiency for the Channel Partnerships
                team by managing Microsoft Office and Salesforce to track lead
                progress, streamline communications, and optimize reporting.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="leadership-experience-section">
        <h1 style={{ color: "#6686FF" }}>Leadership Experience</h1>

        {/* SGA Experience */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>Class of 2026 Vice Preseident</h2>
            <h4>Brown University Student Government</h4>
            <h4>Sep 2022 – May 2024</h4>
          </div>
          <div className="experience-content">
            <ul>
              <li>
                Conceptualized and executed large-scale campus events such as
                food festivals, student concerts, and formal dances, with event
                attendance exceeding 3,000 students.
              </li>
              <li>
                Led the organization of Brown University’s campus-wide Spring
                Formal Dance, managing an $80,000 budget, coordinating with
                existing vendors, establishing relationships with new vendors,
                and ensuring effective communication with the student body.
              </li>
            </ul>
          </div>
        </div>

         {/* EP Experience */}
        <div className="experience-item">
          <div className="experience-header">
            <h2>StartUp @ Brown</h2>
            <h4>Brown University Entrepreneurship Program</h4>
            <h4>Aug 2022 - Sep 2023</h4>
          </div>
          <div className="experience-content">
            <ul>
              <li>
                Facilitated growth for local startups and student-initiated
                ventures through consulting services and financial investment.
              </li>
              <li>
                Conducted interviews with alumni entrepreneurs to gather
                insights and advice on startup development.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );

}

export default Experience;
