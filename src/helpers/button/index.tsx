import React, { CSSProperties } from 'react';
import { Props } from 'interfaces/Props';


export const Button = ({className, title, onClick} : Props) => {

    return(
        <button className={className} onClick={onClick}>
            {title}
        </button>
    );
};