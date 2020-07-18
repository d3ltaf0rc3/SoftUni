import React from 'react';
import styles from './index.module.css';
import Origami from '../origami';

class Origamis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      origamis: []
    }
  }

  getOrigamis = async () => {
    const count = this.props.count
    const data = await fetch(`http://localhost:9999/api/origami?count=${count}`);
    const origamis = await data.json();
    this.setState({
      origamis
    })
  }

  renderOrigamis() {
    const { origamis } = this.state;
    return origamis.map((origami, index) => {
      return (
        <Origami key={origami._id} index={index} {...origami} />
      )
    })
  }

  componentDidMount() {
    this.getOrigamis();
  }

  render() {
    return (
        <div className={styles["origamis-wrapper"]}>
          {this.renderOrigamis()}
        </div>
    );
  }
};

export default Origamis;