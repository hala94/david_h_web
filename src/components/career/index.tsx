import React from 'react';
import styles from './styles.module.css';
import { Font, FontType } from 'helpers/fonts';
import { Spacer, SpaceValue } from 'helpers/spacer';
import { Button } from 'components/button';
import { Asset } from 'helpers/asset';
import { Link } from 'components/link';

export function Carrer() {
	return (
		<div className={styles.container}>
			<Spacer v={SpaceValue.l}></Spacer>
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
			<Spacer v={SpaceValue.m}></Spacer>
			<div className={styles.banner_container}>
				<Link url="https://github.com/hala94/david_h_web">
					<Button className={styles.github_button}>
						<Asset className={styles.github_logo} name="github"></Asset>
					</Button>
				</Link>
			</div>
		</div>
	);
}
