
import React from 'react';

const Home = () => {
  const styles = {
    container: {
      paddingTop:'30px',  
      textAlign: 'center',
      marginTop:'50px',
      margin: '0 auto',
      padding: '50px',
      maxWidth: '800px',
      background: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      animation: 'fadeIn 2s ease-in-out',
    },
    title: {
      fontSize: '2em',
      color: '#333',
      marginBottom: '20px',
      animation: 'slideInDown 1s ease-in-out',
    },
    description: {
      fontSize: '1em',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '30px',
      animation: 'slideInUp 1s ease-in-out',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Weather Location Manager</h1>
      <p style={styles.description}>
        Manage and keep track of your favorite locations' weather data. Sign up to create an account, or login to access your personalized weather dashboard.
      </p>
    </div>
  );
};

export default Home;



