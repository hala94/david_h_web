import React from 'react';
import { Props } from 'interfaces/Props';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';

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
				<Font className={styles.nav_title} fontType={FontType.navItem}>
					{title}
				</Font>
				<div className={styles.underline}></div>
			</button>
		</div>
	);
};
