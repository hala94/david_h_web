import React from 'react';
import { Props } from 'interfaces/Props';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';

export const NavigationItem = ({ className, title, onClick }: Props) => {
	return (
		<button
			className={`${styles.navigation_button} ${className}`}
			value={title}
			onClick={() => {
				onClick(title); // Title is used as an ID here
			}}
		>
			<Font className={styles.nav_title} fontType={FontType.navItem}>
				{title}
			</Font>
		</button>
	);
};
