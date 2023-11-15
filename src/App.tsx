import CourseGoal from "./components/CourseGoal.tsx";
import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpeg";
import "./App.css";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Your Learnings",
        description: "Add more about your goals",
      };
      return [...prevGoals, newGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1> Your goals list</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      {goals.map((goal) => (
        <li>
          <CourseGoal title="Learn TS">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis repudiandae.
            </p>
          </CourseGoal>
        </li>
      ))}
      <CourseGoal title="Learn React + TS">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi
          alias ipsum obcaecati qui exercitationem nobis rerum veritatis nostrum
          tempore velit sit vel optio, excepturi dolorem? Quis eaque ut
          expedita!
        </p>
      </CourseGoal>
    </main>
  );
}

export default App;
