import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './Links.module.css';

class Links extends Component {
	state = {
		isActive: false
	}

	openCloseHandler = () => {
		if (this.state.isActive) {
			this.setState({isActive: false})
		} else {
			this.setState({isActive: true})
		}
	}

	render() {
		const classList = [styles.Links]
		if (this.state.isActive){
			classList.push(styles.Active)
		}
		return (
			<div className={classList.join(' ')}>
				<div onClick={this.openCloseHandler} className={styles.tab}><div className={styles.circle}></div></div>
				<Link to="#"><div>About</div></Link>
				<Link to="#"><div>About</div></Link>
				<Link to="#"><div>About</div></Link>
			</div>
		);
	}
}

export default Links;