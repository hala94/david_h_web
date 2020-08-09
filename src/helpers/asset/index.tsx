import React, { useEffect, useState } from 'react';

export const Asset = ({ name }: { name: string }) => {
	const [imgSrc, setimgSrc] = useState<string>('');

	// Ensure asset is loaded only once per component mount
	useEffect(() => {
        console.log("called")
		import(`assets/${name}.png`)
			.then((module) => {
				setimgSrc(module.default);
			})
			.catch(() => {
				console.log(`Failed to load asset ${name}`);
			});
		return () => {};
	}, [name]);

	return <img src={imgSrc} alt="Avatar"></img>;
};
