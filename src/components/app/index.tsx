import React, { useState, useEffect } from 'react';
import { Home } from 'components/home';
import { RouterContext } from 'components/context';
import { Technologies } from 'components/technologies';
import { Carrer } from 'components/career';

import { NavigationBar } from 'components/navigationBar';
import { NavigationItem } from 'components/navigationItem';

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
		<div>
			<NavigationBar>
				<NavigationItem
					title={Routes.Home}
					onClick={didSelectNavBarItem}
				></NavigationItem>
				<NavigationItem
					title={Routes.Technologies}
					onClick={didSelectNavBarItem}
				></NavigationItem>
				<NavigationItem
					title={Routes.Career}
					onClick={didSelectNavBarItem}
				></NavigationItem>
			</NavigationBar>
			<Selection></Selection>
		</div>
	);
}

// Kako sazet u jedno
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
