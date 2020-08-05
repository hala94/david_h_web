import React, { CSSProperties } from 'react';
import { Props } from 'interfaces/Props';

export const Avatar = ({ className, imageSrc, ...props }: Props) => {
	const imageStyle: CSSProperties = {
		objectFit: 'cover',
		height: '100%', // probably should be 100% of the containing element
		width: '100%',
		// borderRadius: '50%',
	};

	return <img src={imageSrc} alt="" style={imageStyle}></img>;
};
