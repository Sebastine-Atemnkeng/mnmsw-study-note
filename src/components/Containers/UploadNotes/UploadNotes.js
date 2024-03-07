import React, { useState } from 'react';
import './UploadNotes.css'; // Make sure to update the CSS file for styling

const UploadNotes = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteCategory, setNoteCategory] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [noteContent, setNoteContent] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!noteTitle || !selectedFile || !noteContent) {
      alert('Please fill in all fields and select a file.');
      return;
    }
    
    const formData = new FormData();
    formData.append('title', noteTitle);
    formData.append('category', noteCategory);
    formData.append('file', selectedFile);
    formData.append('content', noteContent);
    
    console.log('Form Submitted', formData);
    setNoteTitle('');
    setNoteCategory('');
    setSelectedFile(null);
    setNoteContent('');
  };

  return (
    <div className="upload-notes-page">
      <div className="upload-notes-container">
        <div className="header">
          <h2>Upload Notes</h2>
        </div>
        <form onSubmit={handleSubmit} className="upload-notes-form">
          <div className="form-field">
            <label htmlFor="noteTitle">Note Title</label>
            <input
              id="noteTitle"
              type="text"
              placeholder="Enter note title"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="noteCategory">Note Category</label>
            <select
              id="noteCategory"
              value={noteCategory}
              onChange={(e) => setNoteCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              <option value="category1">Document</option>
              <option value="category2">Video</option>
              {/* Add more categories as needed */}
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="selectedFile">Upload File</label>
            <input
              id="selectedFile"
              type="file"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="noteContent">Note Content</label>
            <textarea
              id="noteContent"
              placeholder="Write your note here..."
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UploadNotes;
