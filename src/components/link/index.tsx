import React from 'react';

export const Link = ({ url, children }: { [x: string]: any }) => {
	return (
		<a href={url} target="_blank" rel="noopener noreferrer">
			{children}
		</a>
	);
};
