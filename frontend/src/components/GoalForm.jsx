import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "./FormContainer";
const GoalForm = ({ onSubmit }) => {
  const [goalTitle, setGoalTitle] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the onSubmit callback with the goal title
    onSubmit(goalTitle, score);
    // Reset the form after submission
    setGoalTitle("");
    setScore("");
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="goalTitle">
          <Form.Label>Goal Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter goal title"
            value={goalTitle}
            onChange={(e) => setGoalTitle(e.target.value)}
          />
          <Form.Label>Goal Score</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter goal title"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Goal
        </Button>
      </Form>
    </FormContainer>
  );
};

export default GoalForm;
