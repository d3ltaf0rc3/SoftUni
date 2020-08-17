import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import Origami from '../origami';

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState([]);

  const getOrigamis = async () => {
    const data = await fetch(`http://localhost:9999/api/origami?count=${props.count}`);
    const origamis = await data.json();
    setOrigamis(origamis);
  }

  const renderOrigamis = () => {
    return origamis.map((origami, index) => <Origami key={origami._id} index={index} {...origami} />)
  }

  useEffect(() => {
    getOrigamis();
  });

  return (
    <div className={styles["origamis-wrapper"]}>
      {renderOrigamis()}
    </div>
  );
};

export default Origamis;