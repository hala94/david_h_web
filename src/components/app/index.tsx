import { Carrer } from 'components/career';
import { Home } from 'components/home';
import { NavigationBar } from 'components/navigationBar';
import { NavigationItem } from 'components/navigationItem';
import { Technologies } from 'components/technologies';
import React, { useState } from 'react';
import styles from './styles.module.css';

// Ovo poboljsat
export enum Routes {
	Home = 'Home',
	Technologies = 'Technologies',
	Career = 'Carreer',
}
export const routes = {
	Home: Home,
	Technologies: Technologies,
	Carreer: Carrer,
};

export function App() {
	const [route, setRoute] = useState<Routes>(Routes.Home);

	const didSelectNavBarItem = (route: Routes) => {
		setRoute(route);
	};

	const Selection = () => {
		const Component = routes[route] as () => JSX.Element;
		return <Component></Component>;
	};

	return (
		<div className={styles.container}>
			<div className={styles.content_container}>
				{/* <div className={styles.column_container}>
					<div className={styles.colored_column_container}>
						<div className={styles.colored_column}></div>
					</div>
				</div> */}
				<NavigationBar className={styles.navigation_bar}>
					<NavigationItem
						className={styles.nav_item}
						title={Routes.Home}
						onClick={didSelectNavBarItem}
					></NavigationItem>
					<NavigationItem
						className={styles.nav_item}
						title={Routes.Technologies}
						onClick={didSelectNavBarItem}
					></NavigationItem>
					<NavigationItem
						className={styles.nav_item}
						title={Routes.Career}
						onClick={didSelectNavBarItem}
					></NavigationItem>
				</NavigationBar>
				<Selection></Selection>
			</div>
		</div>
	);
}
