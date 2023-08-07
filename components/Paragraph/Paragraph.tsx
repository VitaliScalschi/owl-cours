import { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react"
import cn from 'classnames'
import style from './Paragraph.module.css'

interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>,HTMLParagraphElement> {
    size?: 's' | 'm' | 'l'
    children: ReactNode
}

export const Paragraph = ({size='m', children, ...props}: PtagProps): JSX.Element => {
    return (
        <p className={cn(style.p, {
            [style.s]: size === 's',
            [style.l]: size ==='l'
        })}
        {...props}
        >
            {children}
        </p>
    )
}