import React, { CSSProperties } from 'react';
import { Props } from 'interfaces/Props';
import styles from './styles.module.css';

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
