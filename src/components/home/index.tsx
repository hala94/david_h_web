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
			<div className={styles.headline_container}>
				<div className={styles.headline_item}>
					<Font className={styles.headline_text} fontType={FontType.headline1}>
						hello, I'm david halapir
					</Font>
					<Spacer v={SpaceValue.xs}></Spacer>
					<Font
						className={styles.subHeadline_text}
						fontType={FontType.headline2}
					>
						MOBILE & FRONTEND DEVELOPER
					</Font>
				</div>
			</div>
			<Spacer v={SpaceValue.l}></Spacer>
			<Asset className={styles.avatar_item} name="david_avatar"></Asset>
			<Spacer v={SpaceValue.l}></Spacer>
			<Button className={styles.button_item} onClick={letsTalkHandler}>
				<Font className={styles.button_title} fontType={FontType.button}>
					LETS TALK
				</Font>
			</Button>
		</div>
	);
}
