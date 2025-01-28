import React from 'react';
import { Table } from 'react-bootstrap';

function UserTable() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const {data} = await axios.get(`/api/users`)
      setUsers(data)
    }
    fetchUsers()
  }, []) 

  return (
    <div className="container mt-4">
      <h3>User List</h3>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserTable;
