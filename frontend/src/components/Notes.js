
import React, { useState, useEffect } from "react";
import CreateArea from "./CreateArea"; 
import Note from "./Note"; 
import '../Notes.css';
import axios from "axios";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/notes', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setNotes(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchNotes();
  }, []);

  const addNote = async (newNote) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/notes', newNote, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(prevNotes => [...prevNotes, res.data]);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteNote = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/notes/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="n">
    <div className="notes-container">
      <h2 style={{ color: 'white' }}>Lists</h2>
      <CreateArea onAdd={addNote} />
      <div className="notes-list">
        {notes.map(noteItem => (
          <Note
            key={noteItem._id}
            id={noteItem._id}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Notes;
