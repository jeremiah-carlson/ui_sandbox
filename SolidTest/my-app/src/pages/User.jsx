import { createResource } from "solid-js";

async function fetchUser() {
  const response = await fetch(`https://randomuser.me/api/`);
  return response.json();
};

export default function User() {
  const [data] = createResource(fetchUser) 
  return (
    <div>
      {data.loading ? ( // 
        <p>Loading...</p>
      ) : (
        <div>
          <p>Name: {data().results[0].name.first}</p> 
        </div>
      )}
    </div>
  );
};
