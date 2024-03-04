import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaTrash, FaCheck } from "react-icons/fa";

const Goal = ({ goal, handleDelete, handleUpdateCompletion }) => {
  const { _id, goalTitle } = goal;
  const [isCompleted, setIsCompleted] = useState(goal.isCompleted);

  const handleUpdate = async (id) => {
    handleUpdateCompletion(id);
    setIsCompleted(!isCompleted);
  };

  return (
    <Card
      className={`my-3 p-3 rounded ${isCompleted ? "text-bg-success" : ""}`}
    >
      <Card.Body>
        <Card.Title as="div">
          <strong>{goalTitle}</strong>
        </Card.Title>
        <Card.Text as="div">{/* Add additional goal details here */}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <Button
            variant="danger"
            className="mr-2"
            onClick={() => handleDelete(_id)}
          >
            <FaTrash />
          </Button>
          <Button
            variant={isCompleted ? "primary" : "success"}
            onClick={() => handleUpdate(_id)}
          >
            {isCompleted ? <FaCheck style={{ color: "white" }} /> : "Complete"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Goal;
