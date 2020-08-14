import React from 'react';
import { Props } from 'interfaces/Props';

export const NavigationBar = ({ className, children }: Props) => {
	return <div className={`${className}`}>{children}</div>;
};
