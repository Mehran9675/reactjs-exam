import axios from "axios";
import { useState } from "react";
//?? Everything you need is already Imported.

interface Users {
  // TODO: Define the user type.
  //?hint: User object contains one propertie of name user that stores a string.
}

export default function AxiosTest() {
  const [users, setUsers] = useState<Users[]>([]);
  //?hint: We are fetching users from the users end point using axios. We need to store the results in users state so that we can render them below.
  //TODO: Change the expresion in the then method of this axios request and set response to the users state.
  axios.get("/api/users").then((res) => console.log(res.data));
  return (
    <>
      <div>Simple Axios And Data Fetching :: Edit src/pages/axios.tsx</div>
      <hr />
      <div>
        {users.map((node) => {
          return (
            <>
              {/* TODO: We are mapping over the users array here and we need to put the name propertie inside the p tag. */}
              <p></p>
            </>
          );
        })}
      </div>
    </>
  );
}
