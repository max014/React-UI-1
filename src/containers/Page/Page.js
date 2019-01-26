import React from 'react';
import Content from '../../components/Content/Content';
import styles from './Page.module.css';
import Links from '../../components/Links/Links';

const page = (props) => {
	const inlineStyles = {
		backgroundImage: `url(${props.page.backgroundImage })`
	}
	let content = null;
	let links = null;
	if (props.active){
		content = props.page.content;
		links = <Links links={props.links} />;
	}
	return (
		<div style={inlineStyles} className={styles.Page}>
			<div className={styles.overlay}></div>
			<Content title={props.page.title}>
				{content}
			</Content>
			{links}
		</div>
	);
}


export default page;