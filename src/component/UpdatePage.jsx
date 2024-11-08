// src/Update.js

import React, { useState } from 'react';
import axios from 'axios';

const UpdatePage = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    class: '',
    studentId: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [token, setToken] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.put('http://157.66.27.28:3000/api/update', formData, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMzMywidXNlcm5hbWUiOiJwaHUxOSIsImlhdCI6MTcyOTg0NDYyNywiZXhwIjoxNzI5ODQ4MjI3fQ.lEtTQwgKg6UryTRWTLbme-KfoU3VgViT0ujZ9FChjcA`, // Thêm token vào header
        },
      });
      setSuccess('Cập nhật thành công!');
      console.log(response.data);
    } catch (err) {
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
      console.error(err);
    }
  };
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
    },
    form: {
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '300px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      width: '100%',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '16px',
      cursor: 'pointer',
    },
    error: {
      color: 'red',
      marginTop: '10px',
    },
    success: {
      color: 'green',
      marginTop: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1>Cập Nhật Thông Tin Sinh Viên</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Tên sinh viên:</label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div>
            <label>Mã sinh viên:</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <div>
            <label>Lớp:</label>
            <input
              type="text"
              name="class"
              value={formData.class}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>Cập Nhật</button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
        {success && <p style={styles.success}>{success}</p>}
      </div>
    </div>
  );
};

export default UpdatePage;