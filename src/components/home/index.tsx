import React from 'react';
import styles from './styles.module.css';
import avatar from 'assets/david_avatar.png';

import { Avatar } from 'components/avatar';

export function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.spacer}></div>
			<div className={styles.navBar}>
				<div className={styles.navBarItem}>Home</div>
				<div className={styles.navBarItem}>Technologies</div>
				<div className={styles.navBarItem}>Career</div>
			</div>
            <div className={styles.spacer2}></div>
			<div className={styles.main_content_container}>
				<div className={styles.content_item}>
                    <div>Hello, i'm david</div>
                    <div>MOBILE & FRONTEND DEVELOPER</div>
            
                </div>
				<div className={styles.content_item}>
                    <Avatar imageSrc={avatar}></Avatar>
                </div>
				<div className={styles.content_item}>Additonal Contact info dsj sdgjhgsd jhgdjs hgjshgds jhjhsgj dgshjgdshgdjshsdgj hsgdjdsgh jsdghs jshg</div>
			</div>
		</div>
	);
}
