import React from 'react';
import { Props } from 'interfaces/Props';
import { Font, FontType } from 'helpers/fonts';

export const Button = ({ className, title, onClick }: Props) => {
	return (
		<button className={className} onClick={onClick}>
			<Font fontType={FontType.button}>{title}</Font>
		</button>
	);
};
