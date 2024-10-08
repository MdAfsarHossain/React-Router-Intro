import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();

    return (
        <div className="flex flex-col gap-2 py-5 text-center">
            <h1 className="text-2xl">All Users: {users.length}</h1>
            <p>Wecome al users section</p>

            <div className="grid grid-cols-4 gap-5">
                {
                    users.map(user => 
                        <User 
                        key={user.id} 
                        user={user}>
                        </User>
                    )
                }
            </div>
        </div>
    );
};

export default Users;