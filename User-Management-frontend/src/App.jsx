import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form Input States
  const [inputFirstName, setInputFirstName] = useState("");
  const [inputLastName, setInputLastName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  // Update Mode track karne ke liye
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const BACKEND_URL = "http://localhost:8080/api/user"; 

  // 1. GET ALL
  const fetchUsers = () => {
    axios.get(BACKEND_URL)
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Tomcat Server se connect nahi ho paya!");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🛠️ Form Submit Handler
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!inputFirstName || !inputLastName || !inputEmail) {
      alert("Sari fields bharna zaroori hai!");
      return;
    }

    const userPayload = {
      firstName: inputFirstName, 
      lastName: inputLastName,
      email: inputEmail
    };

    if (isEditMode) {
      axios.put(`${BACKEND_URL}/${currentUserId}`, userPayload)
        .then(response => {
          alert("User details successfully update ho gayi! 🔄");
          resetForm();
          fetchUsers();
        })
        .catch(err => {
          console.error("PUT Error:", err);
          alert("Update karne mein error aaya!");
        });
    } else {
      axios.post(BACKEND_URL, userPayload)
        .then(response => {
          alert("User successfully add ho gaya! 🎉");
          resetForm();
          fetchUsers();
        })
        .catch(err => {
          console.error("POST Error:", err);
          alert("User add karne mein dikkat aayi!");
        });
    }
  };

  // ✏️ Edit Mode On
  const handleEditClick = (user) => {
    setIsEditMode(true);
    setCurrentUserId(user.id);
    setInputFirstName(user.firstName);
    setInputLastName(user.lastName);
    setInputEmail(user.email);
  };

  // ❌ DELETE API Call
  const handleDeleteUser = (id) => {
    if (window.confirm(`Kya aap sure hain ki ID: ${id} ko delete karna hai?`)) {
      axios.delete(`${BACKEND_URL}/${id}`)
        .then(response => {
          alert("User successfully delete ho gaya! ❌");
          fetchUsers();
          if(isEditMode && currentUserId === id) resetForm();
        })
        .catch(err => {
          console.error("DELETE Error:", err);
          alert("Delete karne mein error aaya!");
        });
    }
  };

  const resetForm = () => {
    setInputFirstName("");
    setInputLastName("");
    setInputEmail("");
    setIsEditMode(false);
    setCurrentUserId(null);
  };

  // Modern UI Styles Object (In-line styling optimized)
  const styles = {
    container: {
      padding: '40px 20px',
      backgroundColor: '#0f172a', // Sleek Slate Dark Background
      color: '#f8fafc',
      minHeight: '100vh',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    header: {
      color: '#38bdf8', // Neon cyan color
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    subHeader: {
      color: '#64748b',
      fontSize: '16px',
      marginBottom: '35px'
    },
    card: {
      width: '100%',
      maxWidth: '650px',
      backgroundColor: '#1e293b', // Card color
      border: isEditMode ? '1px solid #f59e0b' : '1px solid #334155',
      padding: '28px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
      marginBottom: '30px',
      transition: 'all 0.3s ease'
    },
    formTitle: {
      marginTop: 0,
      marginBottom: '20px',
      fontSize: '20px',
      color: isEditMode ? '#f59e0b' : '#38bdf8',
      fontWeight: '600'
    },
    inputGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    },
    input: {
      padding: '12px 16px',
      borderRadius: '8px',
      border: '1px solid #475569',
      backgroundColor: '#0f172a',
      color: '#fff',
      fontSize: '15px',
      outline: 'none',
      transition: 'border-color 0.2s',
    },
    btnSubmit: {
      padding: '12px',
      backgroundColor: isEditMode ? '#f59e0b' : '#10b981', // Emerald green or Amber orange
      color: isEditMode ? '#000' : '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '16px',
      boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)',
      transition: 'transform 0.2s, opacity 0.2s'
    },
    btnCancel: {
      padding: '12px',
      backgroundColor: '#475569',
      color: '#fff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '16px'
    },
    userListCard: {
      width: '100%',
      maxWidth: '650px',
      backgroundColor: '#1e293b',
      border: '1px solid #334155',
      padding: '28px',
      borderRadius: '16px',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
    },
    userItem: {
      backgroundColor: '#111827',
      padding: '16px',
      borderRadius: '12px',
      marginBottom: '12px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      border: '1px solid #1f2937'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    },
    btnEdit: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      padding: '8px 14px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px',
    },
    btnDelete: {
      backgroundColor: '#ef4444',
      color: 'white',
      border: 'none',
      padding: '8px 14px',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Control Panel</h1>
      <div style={styles.subHeader}>Full-Stack Java Backend REST API Bridge</div>
      
      {/* 📝 FORM CARD */}
      <div style={styles.card}>
        <h3 style={styles.formTitle}>
          {isEditMode ? `⚙️ Update User Account (ID: ${currentUserId})` : "👤 Add New User Instance"}
        </h3>
        <form onSubmit={handleFormSubmit} style={styles.inputGroup}>
          <input 
            type="text" 
            placeholder="First Name" 
            value={inputFirstName}
            onChange={(e) => setInputFirstName(e.target.value)} 
            style={styles.input}
          />
          <input 
            type="text" 
            placeholder="Last Name" 
            value={inputLastName}
            onChange={(e) => setInputLastName(e.target.value)} 
            style={styles.input}
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            style={styles.input}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button type="submit" style={styles.btnSubmit}>
              {isEditMode ? "Save Changes" : "Deploy User to DB"}
            </button>
            {isEditMode && (
              <button type="button" onClick={resetForm} style={styles.btnCancel}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* 📋 LIVE DATABASE LIST */}
      <div style={styles.userListCard}>
        <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '20px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#10b981', borderRadius: '50%' }}></span>
          Live Database Registry
        </h2>

        {loading && <p style={{ color: '#94a3b8' }}>Querying Tomcat Server...</p>}
        {error && <p style={{ color: '#f87171' }}>{error}</p>}

        {!loading && !error && users.length === 0 && (
          <p style={{ color: '#64748b', textAlign: 'center', padding: '20px' }}>No records found in the database.</p>
        )}

        {!loading && !error && (
          <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '5px' }}>
            {users.map(user => (
              <div key={user.id} style={styles.userItem}>
                <div style={styles.userInfo}>
                  <span style={{ fontSize: '13px', color: '#38bdf8', fontWeight: '600' }}>UID: {user.id}</span>
                  <span style={{ fontSize: '17px', fontWeight: '600' }}>{user.firstName} {user.lastName}</span>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>{user.email}</span>
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => handleEditClick(user)} style={styles.btnEdit}>Edit</button>
                  <button onClick={() => handleDeleteUser(user.id)} style={styles.btnDelete}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;