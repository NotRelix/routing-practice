import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import ContactForm from './Pages/ContactForm'
import ToDoList from './Pages/ToDoList'

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const Protected = ({ isLoggedIn, children }) => {
    if (isLoggedIn) {
      return (
        <>
          {children}
        </>
      )
    }
    else {
      return (
        <>
          <h1>Not Allowed</h1>
        </>
      )
    }
  }

  return (
    <>
      <BrowserRouter>
        <button onClick={() => setLoggedIn(!loggedIn)}>{loggedIn == false ? "Sign In" : "Sign Out"}</button>
        <header>
          <nav>
            <NavLink className="nav-link" to="/">Contact Form</NavLink>
            <NavLink className="nav-link" to="/todolist">To-Do-List</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={
            <Protected isLoggedIn={loggedIn}>
              <ContactForm />
            </Protected>
          } />
          <Route path="/todolist" element={
            <Protected isLoggedIn={loggedIn}>
              <ToDoList />
            </Protected>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
