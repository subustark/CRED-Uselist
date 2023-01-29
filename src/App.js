import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Login from './Login';
import { Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import Portal from './Portal';
import CreateUser from './CreateUser';
import UserView from './UserView';
import EditUser from './EditUser';


function App() {
  const [data, setData] = useState([
    {
      id: 1210,
      name: "SUBRAMANI E",
      email: "subustark25@gmail.com",
      role: "Full Stack Developer",
      salary: "35000"
    },
    {
      id: "1211",
      name: "RAKESH R",
      email: "rakesh97@gmail.com",
      role: "system Engineer",
      salary: "30000"
    },
    {
      id: "1212",
      name: "DEVAN L",
      email: "ldevan@gmail.com",
      role: "Technical Associate",
      salary: "40000"
    }
  ])
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/portal" element={<Portal />}>
        <Route path="userlist" element={<UserList data={data} setData={setData} />} />
        <Route path="createuser" element={<CreateUser data={data} setData={setData} />} />
        <Route path="userview/:id" element={<UserView data={data} />} />
        <Route path="edituser/:id" element={<EditUser data={data} />} />
      </Route>
    </Routes>
  );
}

export default App;
