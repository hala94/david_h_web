import React, { CSSProperties } from 'react';
import styles from './styles.module.css';
import avatar from 'assets/david_avatar.png';
import { Spacer } from 'helpers/spacer';
import { Avatar } from 'components/avatar';
import { Font, FontType } from 'components/fonts';

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
		</div>
	);
}
