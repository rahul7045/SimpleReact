import React , {useState} from "react";
import AddUser from "./Components/Users/AddUser";
import ListUser from "./Components/Users/ListUser";


function App() {
  const [userList , setUserList]  = useState([]);

  const addUserHandler = (uName , uAge) =>{
    setUserList((prevUserList) =>{
      return [
        ...prevUserList ,
        {name : uName , age : uAge , id : Math.random().toString()} 
      ];
    })
  }

  const deleteUser = (userId) =>{
     const newUser = userList.filter(user=>{
        return user.id != userId
     })

     setUserList(newUser)
  }
  return (
    <div className="container-fluid main-page">
        <AddUser onAddUser={addUserHandler} />
        <ListUser onDelete={deleteUser} users={userList} />
     </div>
  );
}

export default App;
