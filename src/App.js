import "./styles.css";
//importing and use image in react
import Image from "./image/OIP.jpg";

//define javasript object is react
const data = {
  name: "Ripon Miah",
  age: 33,
  gender: "Male",
  image:
    "https://avatars.githubusercontent.com/u/93313948?s=400&u=3b7b0eae8fe6fefc90d310fc5bfd35ee7715db81&v=4",
  height: "100px",
  width: "150px",
  isLoggedIn: false
};

//create custom component is react file and eccess object data in react file
function MyElement() {
  return (
    <>
      <h5>Name :{data.name} </h5>
      <h5>age :{data.age} </h5>
      <h5>gender :{data.gender} </h5>
      <img
        style={{ width: data.width, height: "250px" }}
        src={Image}
        alt={`this is the image of ${data.image}`}
      />
    </>
  );
}

//create button component
function LogoutButton() {
  return <button>Logout </button>;
}

function LoginButton() {
  return <button>Login</button>;
}

// conditional rendering in react

// if else and assign component to variable

//let button;
//if (data.isLoggedIn) {
//button = <LogoutButton />;
//} else {
//button = <LoginButton />;
//}

//create a function and use condition by if else and return component

//function isLoggedIn() {
//if (data.isLoggedIn) {
// return <LogoutButton />;
//} else {
// return <LoginButton />;
//}
//}

//useing if else inside jsx component directly by IIFE function

//{(() => {//
//if (data.isLoggedIn) {
// return <LogoutButton />;
//}
//})()}

// shorthand if else or Ternary operator

//{data.isLoggedIn ? <LogoutButton /> : <LoginButton />}

//logical AND && operator and OR || Operator

//{data.isLoggedIn && <LogoutButton />}
//{data.isLoggedIn || <LoginButton />}

export default function App() {
  return (
    <>
      <MyElement />
    </>
  );
}
