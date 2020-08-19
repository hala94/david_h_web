import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';
import { Spacer } from 'helpers/spacer';

export function Carrer() {
	return (
		<div className={styles.container}>
			<Spacer top={120}></Spacer>
			<div className={styles.content_container}>
				<Font className={styles.career_item} fontType={FontType.careerItem}>
					mobile software developer with 3 years of professional working
					experience
				</Font>
				<Font className={styles.career_item} fontType={FontType.careerItem}>
					ability to work both alone and in an agile environment
				</Font>
				<Font className={styles.career_item} fontType={FontType.careerItem}>
					strong software design principles
				</Font>
			</div>
		</div>
	);
}
