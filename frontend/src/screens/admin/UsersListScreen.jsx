import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useGetUsersQuery } from "../../slices/usersApiSlice";
import { Table, Button } from "react-bootstrap";
import { FaCheck, FaTrash, FaEdit, FaTimes } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const UsersListScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();
  console.log(users);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: "green" }} />
                  ) : (
                    <FaTimes style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button variant="light" className="btn btn-sm">
                      <FaEdit />
                    </Button>
                  </LinkContainer>
                  <Button variant="danger" className="btn btn-sm">
                    <FaTrash style={{ color: "white" }} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UsersListScreen;
