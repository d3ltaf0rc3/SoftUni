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
        const data = await fetch("http://localhost:9999/api/origami");
        const origamis = await data.json();
        this.setState({
            origamis
        })
    }

    renderOrigamis() {
        const { origamis } = this.state;
        return origamis.map(origami => {
            return (
                <Origami key={origami._id} {...origami} />
            )
        })
    }

    componentDidMount() {
        this.getOrigamis();
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>Origamis</h1>
                <div className={styles["origamis-wrapper"]}>
                    {this.renderOrigamis()}
                </div>
            </div>
        );
    }
};

export default Origamis;