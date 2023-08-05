import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams  } from "react-router-dom";

const Update = () => {

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const { id } = useParams();

  const handleBookSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("desc", book.desc);
    formData.append("price", book.price);
        formData.append("cover", file);
        formData.append("fileName", fileName);

    try {
       axios.put(`http://localhost:8800/books${id}`, formData);
       navigate("/books");
    } catch (error) {
      console.log("error->" + error);
    }
  };
  const handleChange = (e) => {
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

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books${id}`);
        setBook({
                      title : res.data[0].title,
                      desc : res.data[0].desc,
                      price : res.data[0].price,
                      cover : res.data[0].cover,
                    });
      } catch (error) {
        console.log("Error->" + error);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(bookId);

 
  return (
    <div className="form">
      <h1>Update Existing Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
        value={book.title}
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="desc"
        value={book.desc}
      />
      <input
        type="text"
        placeholder="price"
        onChange={handleChange}
        name="price"
        value={book.price}
      />
      <input
        type="file"
        placeholder="cover"
        onChange={handleFileChange}
        name="cover"
      />

      <label>Old Image</label>
      <img src={book.cover} width='100' height='100' alt=""/>

      <label>New Image</label>

      {fileName.preview && <img src={fileName.preview} width='100' height='100' alt=""/>}


      <button className="formButton" onClick={handleBookSubmit}>
        Update
      </button>
    </div>
  );
};

export default Update;
