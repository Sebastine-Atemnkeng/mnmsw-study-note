import React, { useState } from 'react';
import './UploadNotes.css';

const UploadNotes = () => {
  // State for the form fields
  const [noteTitle, setNoteTitle] = useState('');
  const [noteCategory, setNoteCategory] = useState(''); // Assuming you have categories
  const [selectedFile, setSelectedFile] = useState(null);
  const [noteContent, setNoteContent] = useState('');

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form fields as necessary
    if (!noteTitle || !selectedFile || !noteContent) {
      alert('Please fill in all fields and select a file.');
      return;
    }
    
    // Prepare FormData for sending
    const formData = new FormData();
    formData.append('title', noteTitle);
    formData.append('category', noteCategory);
    formData.append('file', selectedFile);
    formData.append('content', noteContent);

    // Placeholder for where you would submit the form data to your backend
    console.log('Form Submitted', formData);
    
    // Reset form fields after submission
    setNoteTitle('');
    setNoteCategory('');
    setSelectedFile(null);
    setNoteContent('');
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">Upload Content</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
        <select
          value={noteCategory}
          onChange={(e) => setNoteCategory(e.target.value)}
        >
          {/* Replace these options with your actual categories */}
          <option value="">Select a category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <input
          type="file"
          onChange={handleFileChange}
        />
        <textarea
          placeholder="Write your note here..."
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadNotes;
