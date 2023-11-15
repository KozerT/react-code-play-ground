import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpeg";
import CourseGoaList from "./components/courseGoalList.tsx";
import "./App.css";
import { useState } from "react";

export type CourseGoal = {
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
      <CourseGoaList goals={goals}></CourseGoaList>
    </main>
  );
}

export default App;
