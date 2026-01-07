import "./Workflow.css";
import workflowImg from "../../assets/workflow.jpg"; // your generated workflow image

export default function Workflow() {
  return (
    <section className="workflow">
      <div className="workflow-container">
        
        {/* TEXT */}
        <div className="workflow-text">
          <h2>How We Work</h2>
          <p>
            From understanding your requirements to delivering a
            stress-free celebration, Manoj Events manages everything
            so you can enjoy every moment with your loved ones.
          </p>
        </div>

        {/* IMAGE */}
        <div className="workflow-image">
          <img src={workflowImg} alt="Manoj Events Workflow" />
        </div>

      </div>
    </section>
  );
}
