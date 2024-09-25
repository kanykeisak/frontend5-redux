import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, changeInput} from "../../store/usersSlice";

const UsersPage = () => {
    const dispatch = useDispatch()

    const {inputValue, users} = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    return (
        <div>
            <input type="text" placeholder='name' onChange={changeInputFunc}/>
            <button onClick={addUserFunc}>add user</button>
            {users.map(user => <p>{user}</p>)}
        </div>
    );
};

export default UsersPage;