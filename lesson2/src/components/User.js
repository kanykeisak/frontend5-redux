import React from 'react';

const User = ({userInfo, getUserDetails, userDetails}) => {
    return (
        <div>
            <ul>
                <li>name: {userInfo.name}</li>
                <li>email: {userInfo.email}</li>
                <button onClick={() => getUserDetails(userInfo.id)}>get more</button>
                {userDetails && (
                    <ul>
                        <li>phone: {userDetails.phone}</li>
                        <li>website: {userDetails.website}</li>
                        <li>company: {userDetails.company.name}</li>
                        <li>address: {`${userDetails.address.street}, ${userDetails.address.city}`}</li>
                    </ul>
                )}
            </ul>

        </div>
    );
};

export default User;