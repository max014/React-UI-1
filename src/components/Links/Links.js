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
				<Link to={this.props.links[0].slug}>
					<div style={{backgroundImage: `url(${this.props.links[0].backgroundImage })`}}
						className={styles.pageLink}>
							<div className={styles.overlay}></div>
							<h1>{this.props.links[0].title}</h1>
						</div>
				</Link>
				<Link to={this.props.links[1].slug}>
					<div style={{backgroundImage: `url(${this.props.links[1].backgroundImage })`}}
						className={styles.pageLink}>
							<div className={styles.overlay}></div>
							<h1>{this.props.links[1].title}</h1>
						</div>
				</Link>
				<Link to={this.props.links[2].slug}>
					<div style={{backgroundImage: `url(${this.props.links[2].backgroundImage })`}}
						className={styles.pageLink}>
							<div className={styles.overlay}></div>
							<h1>{this.props.links[2].title}</h1>
						</div>
				</Link>
			</div>
		);
	}
}

export default Links;