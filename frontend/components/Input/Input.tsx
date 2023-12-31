
import { InputProps } from './Input.props';
import styles from './Input.module.css';
import cn from 'classnames'

import { ForwardedRef, forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const Input = forwardRef(({className, ...props }: InputProps, ref:ForwardedRef<HTMLInputElement>): JSX.Element => {
    return (
        <input className={cn(className, styles.input)} ref={ref} {...props} />

    )
})