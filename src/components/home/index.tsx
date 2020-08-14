import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';
import { Asset } from 'helpers/asset';

/*
- fonts
- spacing, sve razmake unutar designa vuc iz jednog fajla - design system showcase + 12 column za adaptive, vidjet s meisterom
- useMedia + mobile
- em, rem vidjet i mozda ovisno o tome napravit
- screen transitions
*/
export function Home() {
	return (
		<div className={styles.container}>
			<Font fontType={FontType.headline1}>hello, I'm david halapir</Font>
			<Font fontType={FontType.headline2}>MOBILE & FRONTEND DEVELOPER</Font>
			<Asset className={styles.avatar} name="david_avatar"></Asset>
		</div>
	);
}
