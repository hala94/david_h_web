import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';
import { Spacer } from 'helpers/spacer';

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
		<div>
			<Spacer top={120}></Spacer>
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
