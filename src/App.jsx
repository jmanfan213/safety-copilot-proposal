import './App.css'
import Proposal from './Proposal'

function App() {
  if (window.location.pathname.replace(/\/$/, '') === '/proposal') {
    return <Proposal />
  }

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <h1 id="hero-title">SafetyCopilot</h1>
          <p className="hero-subtitle">AI-Assisted Software Safety Analysis</p>
          <p className="hero-description">
            An interactive system designed to help safety engineers analyze
            software requirements while keeping humans in control of final
            decisions.
          </p>
          <a className="proposal-button" href="/proposal">
            View Proposal
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
