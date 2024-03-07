import { Row, Col, Button } from "react-bootstrap";
import {
  useGetGoalsQuery,
  useCreateGoalMutation,
  useUpdateGoalMutation,
  useDeleteGoalMutation,
} from "../../slices/goalsApiSlice";
import Goal from "../../components/Goal";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import GoalForm from "../../components/GoalForm";
import { useState } from "react";
import { toast } from "react-toastify";

function GoalScreen() {
  const { data: goals, isLoading, error, refetch } = useGetGoalsQuery();
  const [createGoal, { isLoading: createGoalLoading }] =
    useCreateGoalMutation();
  const [deleteGoal, { isLoading: loadingDelete }] = useDeleteGoalMutation();
  const [updateGoal, { isLoading: isLoadingUpdate }] = useUpdateGoalMutation();
  const [showForm, setShowForm] = useState(false);

  //Create goal
  const handleCreateGoal = async (goalTitle, score) => {
    try {
      // Dispatch createGoal mutation with the goal title
      await createGoal({ goalTitle, score });
      console.log(score);
      refetch();
      toast.success("success");
    } catch (error) {
      console.error("Error creating goal:", error);
    }
  };
  //Delete Goal
  const handleDelete = async (id) => {
    try {
      await deleteGoal(id);
      refetch();
      toast.success("succesfully deleted");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const handleUpdateCompletion = async (id) => {
    try {
      await updateGoal({ id });
    } catch (error) {
      console.error("Error updating goal completion:", error);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Goals</h1>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Form" : "Add New Goal"}
        </Button>
      </div>
      {showForm && <GoalForm onSubmit={handleCreateGoal} />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <Row>
            {goals.map((goal) => (
              <Col key={goal._id} sm="12" md="6" lg="4" xl="3">
                <Goal
                  goal={goal}
                  handleDelete={handleDelete}
                  handleUpdateCompletion={handleUpdateCompletion}
                />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default GoalScreen;
