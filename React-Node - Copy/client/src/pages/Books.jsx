import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logoutStore } from '../action/loginAction'
import { store } from '../app/store.js';

const Books = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const rUsers =  store.getState().value
 
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
         setBooks(res.data);
      } catch (error) {
        console.log("Error->" + error);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (bookId) => {
    console.log("handleDelete");
    try {
      await axios.delete(`http://localhost:8800/books${bookId}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {

    dispatch(logoutStore(setBooks([])))
    navigate("/");
  }

  return (
    <div>
      <h1>List of Books</h1> <span>{rUsers}</span> 
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="pic" />}
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>{book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>
              Delete
            </button>
            <button className="update">
              <Link to={`/update${book.id}`}>Update</Link>
            </button>
          </div>
        ))}
      </div>
      <button>
        <Link to="/add">Add New Book</Link>
      </button>
      <button>
        <Link to="/register">Add Register</Link>
      </button>
      { rUsers ?  <button  onClick={() => logout()}>Logout</button> : <button><Link to="/">Login</Link></button> }
     
    </div>
  );
};

export default Books;
