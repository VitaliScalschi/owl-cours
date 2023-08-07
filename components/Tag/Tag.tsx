import {ReactNode, DetailedHTMLProps, HTMLAttributes} from 'react'
import cn from 'classnames'

import style from './Tag.module.css'

interface Tag  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement>{
    children: ReactNode,
    size?: 's'|'m'
    color?:'ghost'| 'red' | 'gray' | 'green' | 'primary'
    href?: string

}

export const Tag = ({children, size, color, href, ...props}: Tag): JSX.Element => {
    return (
        <div className={cn(style.tag, {
            [style.s]: size === 's',
            [style.m]: size === 'm',
            [style.ghost]: color === 'ghost',
            [style.red]: color === 'red',
            [style.gray]: color === 'gray',
            [style.green]: color === 'green',
            [style.primary]: color === 'primary'
        })}
        {...props}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    )
}