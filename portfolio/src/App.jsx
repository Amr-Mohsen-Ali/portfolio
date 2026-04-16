import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Card = ({ children, className }) => (
  <div className={`bg-white p-6 rounded-2xl shadow ${className}`}>{children}</div>
);

const Button = ({ children }) => (
  <button className="border px-4 py-2 rounded-lg">{children}</button>
);

export default function App() {
  return (
    <div style={{fontFamily: "Arial, sans-serif", padding: "20px", background: "#f5f5f5"}}>
      <div style={{maxWidth: "900px", margin: "auto", display: "grid", gap: "20px"}}>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="text-center">
            <h1 style={{fontSize: "32px", fontWeight: "bold"}}>Amr Mohsen</h1>
            <p style={{color: "gray"}}>Data Analyst | Machine Learning & AI Enthusiast</p>
          </Card>
        </motion.div>

        <Card>
          <h2>About Me</h2>
          <p>
            I work with data and build intelligent solutions using Machine Learning and AI.
            I focus on turning raw data into useful insights and real-world impact.
          </p>
        </Card>

        <Card>
          <h2>Skills</h2>
          <ul>
            <li>Python (Basics)</li>
            <li>Machine Learning</li>
            <li>Data Analysis</li>
            <li>Excel</li>
          </ul>
        </Card>

        <Card>
          <h2>Projects</h2>
          <p>• Data Analysis Project</p>
          <p>• Machine Learning Model</p>
          <p>• AI Experiments</p>
        </Card>

        <Card className="text-center">
          <h2>Contact</h2>
          <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
            <Button><Mail size={16}/> Email</Button>
            <Button><Github size={16}/> GitHub</Button>
            <Button><Linkedin size={16}/> LinkedIn</Button>
          </div>
        </Card>

      </div>
    </div>
  );
}
