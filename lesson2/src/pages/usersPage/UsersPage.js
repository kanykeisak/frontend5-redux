import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUserDetailsAction, fetchUsersAction} from "../../redux/actions";
import User from "../../components/User";

function UsersPage() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    const userDetails = useSelector(state => state.userDetailsReducer.userDetails )

    const getUsers = () => {
        dispatch(fetchUsersAction())
    }
    const getUserDetails = async (userId) => {
        dispatch(fetchUserDetailsAction(userId))
    }
    return (
        <div>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User
                key={user.id}
                userInfo={user}
                getUserDetails={getUserDetails}
                userDetails={userDetails[user.id]}
            />)}
        </div>
    );
};

export default UsersPage;