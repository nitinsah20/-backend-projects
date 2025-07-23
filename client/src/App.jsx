import { useState } from "react";
import "./App.css";
import axios from "axios"; 

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChanger = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      console.log("Signup successful:", res.data);
    } catch (err) {
      console.error("Signup failed:", err.response?.data || err.message);
    }
  };
  // -----login-----
  const buttonchanger = (e) =>{
    const {name, value} = e.target;
    if(name === "email") setEmail(value);
    if(name === "password") setPassword(value);
  }

const buttonclick = async (e) =>{
  e.preventDefault();

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", 
      {
        email,
        password
      }
    );
    console.log("Login successful:", res.data);
    console.log("Login request body:", req.body);

  } catch (error) {
    console.error("login failed:", error.response?.data || error.message);
  }
}

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex max-w-full h-[200px] border flex-col mb-[200px] items-center"
      >
        <label>Enter your Name </label>
        <input
          className="border"
          type="text"
          value={name}
          name="name"
          onChange={handleChanger}
        />
        <br />

        <label>Enter Your Email</label>
        <input
          className="border"
          type="email"
          value={email}
          name="email"
          onChange={handleChanger}
        />
        <br />

        <label>Enter Your Password</label>
        <input
          className="border"
          type="password"
          value={password}
          name="password"
          onChange={handleChanger}
        />
        <br />

        <button className="border" type="submit">
          Submit
        </button>
      </form>
      {/* login */}
      <form
        onSubmit={buttonclick}
        className="flex max-w-full h-[200px] border flex-col items-center"
      >
        <label>enter your email</label>
        <input
          className="border"
          onChange={buttonchanger}
          type="email"
          value={email}
          name="email"
        />
        <br />
        <label>enter your password</label>
        <input
          className="border"
          onChange={buttonchanger}
          type="password"
          value={password}
          name="password"
        />
        <br />
        <button type="submit" className="border">
          Login
        </button>
      </form>
    </>
  );
}

export default App;
