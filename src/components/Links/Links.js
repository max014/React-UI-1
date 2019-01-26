import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import styles from './Links.module.css';
import Page from '../../containers/Page/Page';

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
				<Link to={this.props.links[0].slug}><div className={styles.pageLink}><Page active={false} page={this.props.links[0]} /></div></Link>
				<Link to={this.props.links[1].slug}><div className={styles.pageLink}><Page active={false} page={this.props.links[1]} /></div></Link>
				<Link to={this.props.links[2].slug}><div className={styles.pageLink}><Page active={false} page={this.props.links[2]} /></div></Link>
			</div>
		);
	}
}

export default Links;