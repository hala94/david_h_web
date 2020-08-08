import React, { createContext, Component, CSSProperties } from 'react';
import { Props } from 'interfaces/Props';
import styles from './styles.module.css';

export const NavigationItem = ({ className, title, onClick }: Props) => {
	const itemStyle: CSSProperties = {
		margin: '10px',
		padding: '10px',
		display: 'border-box',
	};

	return (
		<div>
			<button
				className={`${styles.navigation_item} ${className}`}
				style={itemStyle}
				value={title}
				onClick={() => {
					onClick(title); // Title is used as an ID here
				}}
			>
				{title}
				<div className={styles.underline}></div>
			</button>
		</div>
	);
};
