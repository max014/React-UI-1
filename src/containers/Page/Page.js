import React, { Component } from 'react';
import Content from '../../components/Content/Content';
import styles from './Page.module.css';
import Links from '../../components/Links/Links';

class Page extends Component {
	render() {
		const inlineStyles = {
			backgroundImage: null
		}
		return (
			<div className={styles.Page}>
				<Content title="Title">
					Lorem ipsum dolor sit amet, consectetur adipiscing
					 elit, sed do eiusmod tempor incididunt ut labore 
					 et dolore magna aliqua. Ut enim ad minim veniam, 
					 quis nostrud exercitation ullamco laboris nisi ut 
					 aliquip ex ea commodo consequat. Duis aute irure 
					 dolor in reprehenderit in voluptate velit esse cillum 
					 dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
					 cupidatat non proident, sunt in culpa qui officia deserunt 
					 mollit anim id est laborum.
				</Content>
				<Links />
			</div>
		);
	}
}

export default Page;