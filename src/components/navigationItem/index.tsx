import React from 'react';
import { Props } from 'interfaces/Props';
import styles from './styles.module.css';

export const NavigationItem = ({ className, title, onClick }: Props) => {
	return (
		<div>
			<button
				className={`${styles.navigation_item} ${className}`}
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
