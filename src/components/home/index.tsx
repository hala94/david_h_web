import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';
import { Asset } from 'helpers/asset';

/*
- fonts
- spacing, sve razmake unutar designa vuc iz jednog fajla - design system showcase
- useMedia + mobile
- screen transitions
*/
export function Home() {
	return (
		<div className={styles.container}>
			<Font fontType={FontType.headline1}>hello, I'm david halapir</Font>
			<Font fontType={FontType.headline2}>MOBILE & FRONTEND DEVELOPER</Font>
			<Asset name="david_avatar"></Asset>
		</div>
	);
}
