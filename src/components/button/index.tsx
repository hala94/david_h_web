import React from 'react';
import { Props } from 'interfaces/Props';

export const Button = ({ className, onClick, children }: Props) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	);
};
