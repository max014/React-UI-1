import React from 'react';
import styles from './Content.module.css';

const content = (props) => {
	return (
		<div className={styles.Content}>
			<h1>{props.title}</h1>
			<p>{props.children}</p>
		</div>
	);
}

export default content;