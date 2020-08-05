import React, { CSSProperties } from 'react';
import { Props } from 'interfaces/Props';

export const RoundedAvatar = ({ className, imageSrc, ...props }: Props) => {
	const imageStyle: CSSProperties = {
		objectFit: 'cover',
		height: '200px', // probably should be 100% of the containing element
		width: '200px',
		borderRadius: '50%',
	};

	return <img src={imageSrc} alt="" style={imageStyle}></img>;
};
