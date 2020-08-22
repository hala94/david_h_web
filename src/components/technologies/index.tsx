import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';

const languages = [
	'react',
	'javascript',
	'swift',
	'typescript',
	'sketch',
	'css',
];

export function Technologies() {
	return (
		<div className={styles.container}>
			{languages.map((itemName) => {
				return (
					<Font
						className={styles.technology_item}
						fontType={FontType.technologyItem}
						key={itemName}
					>
						{itemName}
					</Font>
				);
			})}
		</div>
	);
}
