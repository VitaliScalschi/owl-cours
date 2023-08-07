import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import cn from 'classnames'

import styles from './Button.module.css'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode,
    appearents: 'primary' | 'ghost',
}

export const Button = ({children, appearents, ...props}: ButtonProps):JSX.Element => {
    return(
        <button className={cn(styles.button,{
            [styles.btnPrimary]: appearents === 'primary',
            [styles.btnGhost]: appearents === 'ghost'
        })}
        {...props}>
            {children}
        </button>
    )
}