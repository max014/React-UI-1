import React from 'react';
import Content from '../../components/Content/Content';
import styles from './Page.module.css';
import Links from '../../components/Links/Links';

const page = (props) => {
	const inlineStyles = {
		backgroundImage: `url(${props.page.backgroundImage })`
	}
	return (
		<div style={inlineStyles} className={styles.Page}>
			<div className={styles.overlay}></div>
			<Content title={props.page.title}>
				{props.page.content}
			</Content>
			<Links links={props.links} />
		</div>
	);
}


export default page;