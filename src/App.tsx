import Header from "./components/Header.tsx";
import goalsImg from "./assets/goals.jpeg";
import CourseGoaList from "./components/CourseGoalList.tsx";
import "./App.css";
import { useState } from "react";
import NewGoal from "./components/NewGoal.tsx";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1> Your goals list</h1>
      </Header>
      <NewGoal onAddGoal={addGoalHandler} />
      <CourseGoaList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
