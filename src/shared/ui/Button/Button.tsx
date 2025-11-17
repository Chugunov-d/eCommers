import { cn } from "@/shared/lib";
import styles from './Button.module.scss'

type ButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost'
type ButtonSize = 'xs' | 'sm' |'md' |'lg'
type ButtonForm = 'rounded' | 'pill' | 'circle'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string
    size?: ButtonSize
    theme?: ButtonTheme
    form?: ButtonForm
    disabled?: boolean
}


export const Button = (props: ButtonProps) => {
    const {
        children, 
        className, 
        size = 'sm', 
        theme="primary", 
        form='pill', 
        disabled=false, 
        ...rest} = props
    return (
        <button {...rest} disabled={disabled} className={cn(styles.button, styles[size], styles[theme], styles[form], className, {[styles.disabled]: disabled})}>{children}</button>
    )
}