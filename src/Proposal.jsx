import './Proposal.css'

function Proposal() {
  // Replace each bracketed prompt with your own proposal text.
  // The title is in the header; the remaining system design requirements are below.
  return (
    <main className="proposal-page">
      <a className="back-link" href="/">&larr; Back to home</a>

      <article className="proposal-document">
        <header className="proposal-header">
          <p className="proposal-label">System Design Project Proposal</p>
          <h1>SafetyCopilot</h1>
          <p className="proposal-tagline">AI-Assisted Software Safety Analysis</p>
          <p className="proposal-meta">Prepared by: [Your name] &middot; Date: [Date]</p>
          <p className="proposal-meta">
            Assignment requirements: 600&ndash;1,200 words and 5&ndash;10 references.
            Replace the prompts below with your project plan.
          </p>
        </header>

        <section aria-labelledby="introduction-heading">
          <h2 id="introduction-heading">1. Introduction</h2>
          <p>[Introduce the software safety analysis problem and explain why it matters. Describe the motivation for SafetyCopilot and how an AI-assisted system could support engineers while keeping them in control of final decisions. Connect your motivation to relevant sources using in-text citations.]</p>
        </section>

        <section aria-labelledby="users-heading">
          <h2 id="users-heading">2. Target Users and User Goals</h2>
          <p>[Identify the specific users you intend to serve, such as software safety engineers or requirements reviewers. Describe their experience, work context, current workflow, and challenges.]</p>
          <p>[Explain the goals the system would help these users achieve. Consider goals such as finding ambiguous requirements, reviewing possible safety concerns, and documenting the reasoning behind decisions. Specify which goals your project will prioritize.]</p>
        </section>

        <section aria-labelledby="user-study-heading">
          <h2 id="user-study-heading">3. How We Will Study Target Users</h2>
          <p>[Describe how you will learn about users before and during design, for example through interviews, workflow observation, or reviews of example requirements. State what you want to learn, the activities participants will complete, and what information you will collect.]</p>
          <p>[Explain how you will analyze what you learn and turn those findings into design requirements or changes to your prototype.]</p>
        </section>

        <section aria-labelledby="solution-heading">
          <h2 id="solution-heading">4. What We Might Build</h2>
          <p>[Describe the system you currently envision, its main features, and a typical user workflow. Explain how engineers would inspect, accept, revise, or reject AI suggestions and retain responsibility for final decisions.]</p>
          <p>[Outline the planned prototype, technologies, and deliverables. State what is in scope, what is outside the project, and which decisions remain open until you study users.]</p>
        </section>

        <section aria-labelledby="evaluation-heading">
          <h2 id="evaluation-heading">5. How We Will Evaluate Success</h2>
          <p>[Describe how you will evaluate the prototype with representative tasks and users. Explain the evaluation procedure and any comparison to an existing workflow or baseline.]</p>
          <p>[Choose measures linked to your user goals, such as task completion, review quality, time taken, usability, or whether users recognize incorrect AI suggestions. State what results would count as success and how you will use feedback to improve the design.]</p>
        </section>

        <section aria-labelledby="recruitment-heading">
          <h2 id="recruitment-heading">6. How We Will Recruit Participants</h2>
          <p>[State who is eligible to participate, the number you aim to recruit for user research and evaluation, and where you will reach them, such as professional contacts, relevant courses, or engineering groups.]</p>
          <p>[Describe how you will invite participants, the time commitment, and any compensation. Explain how you will obtain consent and protect participant information. If access to safety engineers is limited, describe a feasible alternative and how that would limit your conclusions.]</p>
        </section>

        <section aria-labelledby="references-heading">
          <h2 id="references-heading">7. References</h2>
          <p>Include 5&ndash;10 sources cited in the proposal, using a consistent citation style. Look for relevant work on software safety analysis, requirements engineering, human-AI interaction, and your study or evaluation methods.</p>
          {/* Fill in these five required entries. Add up to five more as needed. */}
          <ol className="proposal-references">
            <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li>
            <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li>
            <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li>
            <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li>
            <li>[Author(s). (Year). Title. Publisher or publication. URL or DOI.]</li>
          </ol>
        </section>
      </article>
    </main>
  )
}

export default Proposal
