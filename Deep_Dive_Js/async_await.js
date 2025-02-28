// ------------------------- Basic Syntax -----------------
// async function fetchData() {
//   console.log("fetching data");
//   const data = await new Promise((res) => {
//     setTimeout(() => {
//       res("data received");
//     }, 3000);
//   });
//   console.log(data);
// }

// fetchData();

// ----------------------------- Fetch API's -----------------------
const fetchUsers = async () => {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await result.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

// fetchUsers();


const createUser = async()=>{
    const newUser = {
        name: "Mohammad Dinar",
        age: 20
    }

    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(newUser)
    })

    const data = await response.json();
    console.log(data)
}

// createUser();
