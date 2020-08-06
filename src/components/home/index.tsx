import React from 'react';
import styles from './styles.module.css';
import avatar from 'assets/david_avatar.png';
import { Spacer } from 'helpers/spacer';
import { Avatar } from 'components/avatar';

export function Home() {
	return (
		<div className={styles.container}>
			<Spacer left="5vw"></Spacer>
			<div className={styles.navBar}>
				<div className={styles.navBarItem}>Home</div>
				<div className={styles.navBarItem}>Technologies</div>
				<div className={styles.navBarItem}>Career</div>
			</div>
			<Spacer left="10vw"></Spacer>
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
						<p>
							Additonal Contact info dsj sdgjhgsd jhgdjs hgjshgds jhjhsgj
							dgshjgdshgdjshsdgj hsgdjdsgh jsdghs jshg
						</p>
					</Spacer>
				</div>
			</div>
		</div>
	);
}
