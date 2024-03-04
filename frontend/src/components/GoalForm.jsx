import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const GoalForm = ({ onSubmit }) => {
  const [goalTitle, setGoalTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Invoke the onSubmit callback with the goal title
    onSubmit(goalTitle);
    // Reset the form after submission
    setGoalTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="goalTitle">
        <Form.Label>Goal Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter goal title"
          value={goalTitle}
          onChange={(e) => setGoalTitle(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Add Goal
      </Button>
    </Form>
  );
};

export default GoalForm;
