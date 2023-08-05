import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
 import { store } from '../app/store.js';

const Add = () => {

  const rUsers =  store.getState().value


  // const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState("");
  // const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
   });


  const navigate = useNavigate();

  const handleBookSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("desc", book.desc);
    formData.append("price", book.price);
        formData.append("cover", file);
        formData.append("fileName", fileName);
    try {
      axios.post("http://localhost:8800/books", formData);
      navigate("/books");
    } catch (error) {
      console.log("error->" + error);
    }
  };
  const handleChange = (e) => {
    // setTitle(e.target.value);
    // setDesc(e.target.value);
    // setPrice(e.target.value);
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));


  };

  const handleFileChange = (e) => {
    const cover = {
      preview: URL.createObjectURL(e.target.files[0]),
      cover: e.target.files[0],
    }
    setFileName(cover)
     setFile(e.target.files[0]);
    // setFileName(e.target.files[0].name);   
   }

 
  return (
    <form className="form" enctype="multipart/form-data">  <span>{rUsers}</span> 
      <h1>Add New Book</h1>

      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
      />
      <input
        type="text"
        placeholder="price"
        onChange={handleChange}
        name="price"
      />
      <input
        type="file"
        placeholder="cover"
        onChange={handleFileChange}
        name="cover"
        multiple
       />

{fileName.preview && <img src={fileName.preview} width='100' height='100' alt=""/>}

      <button className="formButton" onClick={handleBookSubmit}>
        Add
      </button>
    </form>
  );
};

export default Add;
