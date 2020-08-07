import React from 'react';
import styles from './styles.module.css';
import avatar from 'assets/david_avatar.png';
import { Spacer } from 'helpers/spacer';
import { Avatar } from 'components/avatar';
import { Button } from 'helpers/button';
import { useRouter } from 'components/context';
import { Routes } from 'components/app';

export function Home() {
	const { onDidNavigate } = useRouter();

	return (
		<div className={styles.container}>
			<div className={styles.main_content_container}>
				<div className={styles.content_item}>
					<Spacer top="30%"></Spacer>
					<p>Hello, i'm david</p>
					<Spacer top="30%"></Spacer>
					<p>MOBILE & FRONTEND DEVELOPER</p>
					<Spacer top="40%"></Spacer>
				</div>
				<div className={styles.content_item}>
					<Avatar imageSrc={avatar}></Avatar>
				</div>
				<div className={styles.content_item}>
					<Spacer top="30%" bottom="30%" left="10%" right="10%">
						<p>halapir.david@gmail.com</p>
						<p>+ 385 95 908 6540</p>
						<p>51 000 Rijeka, Croatia</p>
					</Spacer>
				</div>
			</div>
		</div>
	);
}
