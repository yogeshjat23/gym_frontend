import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';
const apiUrl = process.env.REACT_APP_API_URL ;
console.log(apiUrl);
 
const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) {
      alert('Please upload a file first.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post(`${apiUrl}/api/upload`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => alert('File uploaded successfully!'))
    .catch(error => alert('Error uploading file!'));
  };

  return (
    <div  className='file-container'>
      <input type="file" accept=".csv, .xlsx, .xls" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
