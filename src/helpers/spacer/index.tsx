import React, { CSSProperties } from 'react';

export const Spacer = ({
	left,
	right,
	top,
	bottom,
	children,
}: {
	[x: string]: any;
}) => {
	const spacerStyle: CSSProperties = {
		overflow: 'hidden',
		paddingLeft: left,
		paddingRight: right,
		paddingTop: top,
		paddingBottom: bottom,
	};

	return <div style={spacerStyle}>{children}</div>;
};
