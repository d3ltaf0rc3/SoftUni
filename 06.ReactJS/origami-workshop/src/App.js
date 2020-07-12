import React from 'react';
import Header from './components/navigation/index';
import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
