import React , {useRef , useState} from 'react'


 const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error , setError] = useState();


    const addUserHandler = (event) =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if(enteredAge < 1){
            window.alert("Age Cannot be less than 1");
            return;
        }

        props.onAddUser(enteredName , enteredAge);
        nameInputRef.current.value ="";
        ageInputRef.current.value ="";
    }



  return (
    <React.Fragment>

        <div className="card" style={{width: 18 + 'rem' , margin: "auto",marginTop:30+"px" , padding:15+"px"}}>
        <form onSubmit={addUserHandler}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" ref={nameInputRef} />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" ref={ageInputRef}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    </React.Fragment>
  )
}

export default AddUser
