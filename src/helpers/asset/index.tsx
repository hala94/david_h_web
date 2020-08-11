import React, { useEffect, useState } from 'react';
import { Props } from 'interfaces/Props';

export const Asset = ({ className, name }: Props) => {
	const [imgSrc, setimgSrc] = useState<string | undefined>(undefined);

	// Ensure asset is loaded only once per component mount
	useEffect(() => {
		console.log('called');
		import(`assets/${name}.png`)
			.then((module) => {
				setimgSrc(module.default);
			})
			.catch(() => {
				console.log(`Failed to load asset ${name}`);
			});
		return () => {};
	}, [name]);

	return imgSrc ? (
		<img className={className} src={imgSrc} alt={name}></img>
	) : (
		<div></div>
	);
};
