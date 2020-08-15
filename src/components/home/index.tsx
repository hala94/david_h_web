import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';
import { Asset } from 'helpers/asset';
import { Spacer } from 'helpers/spacer';

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
			<Spacer top={120}></Spacer>
			<div className={styles.headline_container}>
				<div className={styles.headline_item}>
					<Font fontType={FontType.headline1}>hello, I'm david halapir</Font>
					<Spacer top={10}></Spacer>
					<Font fontType={FontType.headline2}>MOBILE & FRONTEND DEVELOPER</Font>
				</div>
			</div>
			<Spacer top={64}></Spacer>
			<div className={styles.avatar_container}>
				<Asset className={styles.avatar_item} name="david_avatar"></Asset>
			</div>
			<Spacer bottom={120}></Spacer>
		</div>
	);
}
