import './Proposal.css'

function Proposal() {
  // Use the JSX comments below as writing guidance; add your text in <p> elements.
  // The title is in the header; the remaining system design requirements are below.
  return (
    <main className="proposal-page">
      <a className="back-link" href="/">&larr; Back to home</a>

      <article className="proposal-document">
        <header className="proposal-header">
          <p className="proposal-label">System Design Project Proposal</p>
          <h1>SafetyCopilot</h1>
          <p className="proposal-tagline">AI-Assisted Software Safety Analysis</p>
          <p className="proposal-meta">Prepared by: Danilo Guesela & Jesse Garrison</p>
          {/* Assignment requirements: 600-1,200 words and 5-10 references. */}
        </header>

        <section aria-labelledby="introduction-heading">
          <h2 id="introduction-heading">1. Introduction</h2>
          {/*[Introduce the software safety analysis problem and explain why it matters. Describe the motivation for SafetyCopilot and how an AI-assisted system could support engineers while keeping them in control of final decisions. Connect your motivation to relevant sources using in-text citations.]*/}
          <p>SafetyCopilot is an interactive artificial intelligence (AI) system that is designed to work alongside human safety 
            engineers when analyzing software system requirements. To address the inherently knowledge-intensive and time-consuming process of hazard analysis [1], 
            this system leverages Large Language Models (LLMs) to offload cognitive demand and accelerate the analysis of large volumes of documentation pertaining 
            to safety engineering. The scope of this project is limited to the analysis of system requirements. The LLM accomplishes this by identifying potential 
            hazards and unsafe or missing requirements. To mitigate potential incorrect recommendations by the LLM, SafetyCopilot requires input from the human operator 
            to perform their own evaluation of the software system requirements.</p>
        </section>

        <section aria-labelledby="users-heading">
          <h2 id="users-heading">2. Target Users and User Goals</h2>
          {/* <p>[Identify the specific users you intend to serve, such as software safety engineers or requirements reviewers. Describe their experience, work context, current workflow, and challenges.]</p> */}
          {/* <p>[Explain the goals the system would help these users achieve. Consider goals such as finding ambiguous requirements, reviewing possible safety concerns, and documenting the reasoning behind decisions. Specify which goals your project will prioritize.]</p> */}
        </section>

        <section aria-labelledby="user-study-heading">
          <h2 id="user-study-heading">3. How We Will Study Target Users</h2>
          {/* <p>[Describe how you will learn about users before and during design, for example through interviews, workflow observation, or reviews of example requirements. State what you want to learn, the activities participants will complete, and what information you will collect.]</p> */}
          {/* <p>[Explain how you will analyze what you learn and turn those findings into design requirements or changes to your prototype.]</p> */}
        </section>

        <section aria-labelledby="solution-heading">
          <h2 id="solution-heading">4. What We Might Build</h2>
          {/* <p>[Describe the system you currently envision, its main features, and a typical user workflow. Explain how engineers would inspect, accept, revise, or reject AI suggestions and retain responsibility for final decisions.]</p> */}
          {/* <p>[Outline the planned prototype, technologies, and deliverables. State what is in scope, what is outside the project, and which decisions remain open until you study users.]</p> */}
          <p>Once a project is created within the system, the user uploads the requirements documentation (through file formats such as PDF) to the web application for the system the user intends to analyze. Next, SafetyCopilot extracts the individual software requirements and then the controlled experimental phase begins. The controlled experimental design consists of five phases: human classification, AI classification, human versus AI comparison, AI recommendations with explanations, and finally human acceptance. The human operator would first classify each software requirement extracted by the LLM to determine if the requirement is a hazard or non-hazard. After the human phase is complete, the LLM would then run its own classification independently. Afterwards, the web application will display results that compare the human’s and LLM’s classifications. The LLM will then provide its recommendations and proposed requirement revisions based on the human-identified and AI-identified hazards. Optionally, the user can choose to view the LLM’s explanation behind its recommendation. The experimental results can be evaluated using measures such as hazard-identification accuracy, false positives, false negatives, task-completion time, cognitive workload, trust, and reliance on AI recommendations. The project ultimately seeks to determine whether interactive AI assistance improves safety-engineering performance and whether explanations help users make more informed decisions about when to trust or question AI-generated recommendations.</p>
        </section>

        <section aria-labelledby="evaluation-heading">
          <h2 id="evaluation-heading">5. How We Will Evaluate Success</h2>
          {/* <p>[Describe how you will evaluate the prototype with representative tasks and users. Explain the evaluation procedure and any comparison to an existing workflow or baseline.]</p> */}
          {/* <p>[Choose measures linked to your user goals, such as task completion, review quality, time taken, usability, or whether users recognize incorrect AI suggestions. State what results would count as success and how you will use feedback to improve the design.]</p> */}
        </section>

        <section aria-labelledby="recruitment-heading">
          <h2 id="recruitment-heading">6. How We Will Recruit Participants</h2>
          {/* <p>[State who is eligible to participate, the number you aim to recruit for user research and evaluation, and where you will reach them, such as professional contacts, relevant courses, or engineering groups.]</p> */}
          {/* <p>[Describe how you will invite participants, the time commitment, and any compensation. Explain how you will obtain consent and protect participant information. If access to safety engineers is limited, describe a feasible alternative and how that would limit your conclusions.]</p> */}
        </section>

        <section aria-labelledby="references-heading">
          <h2 id="references-heading">7. References</h2>
          {/* Include 5-10 sources cited in the proposal, using a consistent citation style. Look for relevant work on software safety analysis, requirements engineering, human-AI interaction, and your study or evaluation methods. */}
          {/* Fill in these five required entries. Add up to five more as needed. */}
          <ol className="proposal-references">
            <li>I. M. Dokas, “From hallucinations to hazards: benchmarking LLMs for hazard analysis in safety-critical systems,” Safety Science, vol. 194, p. 107056, Feb. 2026, doi: 10.1016/j.ssci.2025.107056.</li>
            {/* <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li> */}
            {/* <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li> */}
            {/* <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li> */}
            {/* <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li> */}
          </ol>
        </section>
      </article>
    </main>
  )
}

export default Proposal

