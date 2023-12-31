import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames'

export const Button = ({appearance, children, className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className, {
                [styles.primary]: appearance == 'primary',
                [styles.ghost]: appearance == 'ghost',
                [styles.alert]: appearance == 'alert',
                [styles.green]: appearance == 'green',
            })}
            {...props}
        >
            {children}
        </button>
    )
}