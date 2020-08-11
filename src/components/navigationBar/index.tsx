import React, { CSSProperties } from 'react';
import { Props } from 'interfaces/Props';
import styles from './styles.module.css';

// Unnecesarry component used to make layout semantics more readable
export const NavigationBar = ({ className, children }: Props) => {
	const navStyle: CSSProperties = {
		display: 'flex',
	};
	return (
		<div className={`${styles.navigation_bar} ${className}`} style={navStyle}>
			{children}
		</div>
	);
};
