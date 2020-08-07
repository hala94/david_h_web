import React, { createContext, Component, CSSProperties } from 'react';
import { Props } from 'interfaces/Props';

export const NavigationBar = ({ children }: Props) => {
	const navStyle: CSSProperties = {
		display: 'flex',
		backgroundColor: 'blue',
	};
	return <div style={navStyle}>{children}</div>;
};
