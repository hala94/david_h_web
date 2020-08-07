import React, { createContext, Component, CSSProperties } from 'react';
import { Props } from 'interfaces/Props';

export const NavigationItem = ({ title, onClick }: Props) => {
	const itemStyle: CSSProperties = {
		margin: '10px',
		padding: '10px',
		display: 'border-box',
		width: 'auto',
	};
	return (
		<button
			style={itemStyle}
			value={title}
			onClick={() => {
				onClick(title); // Title is used as an ID here
			}}
		>
			{title}
		</button>
	);
};
