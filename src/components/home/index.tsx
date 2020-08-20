import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';
import { Asset } from 'helpers/asset';
import { Spacer, SpaceValue } from 'helpers/spacer';
import { Button } from 'components/button';

export function Home() {
	const letsTalkHandler = () => {
		window.location.href = 'mailto:halapir.david@gmail.com';
	};
	return (
		<div className={styles.container}>
			<Spacer v={SpaceValue.xl}></Spacer>
			<div className={styles.headline_container}>
				<div className={styles.headline_item}>
					<Font className={styles.headline_text} fontType={FontType.headline1}>
						hello, I'm david halapir
					</Font>
					<Spacer v={SpaceValue.xs}></Spacer>
					<Font fontType={FontType.headline2}>MOBILE & FRONTEND DEVELOPER</Font>
				</div>
			</div>
			<Spacer v={SpaceValue.l}></Spacer>
			<div className={styles.avatar_container}>
				<Asset className={styles.avatar_item} name="david_avatar"></Asset>
			</div>
			<Spacer v={SpaceValue.l}></Spacer>
			<Button
				className={styles.button_item}
				title="lets talk"
				onClick={letsTalkHandler}
			></Button>
			<Spacer v={SpaceValue.xl}></Spacer>
		</div>
	);
}
