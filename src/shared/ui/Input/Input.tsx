import { cn } from "@/shared/lib";
import type { InputHTMLAttributes } from "react";
import styles from './Input.module.scss'
import { useState } from "react";
import { Button } from "../Button/Button";
import HideIcon from '@/shared/assets/icons/Hide.svg?react';
import ShowIcon from '@/shared/assets/icons/Show.svg?react';

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputType {
    className?: string;
    value?: string;
    disabled?: boolean;
    rounded?: boolean;
    Icon?: React.ReactNode
    onChange?: (value: string) => void
}

export const Input = (props: InputProps) => {

    const {className, value, disabled=false, rounded, Icon, onChange, type = 'text',...rest} = props

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [focus, setFocus] = useState<boolean>(false);

    const toggleShowPassword = () => setShowPassword((prev)=> !prev);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

    const handleFocus = ()=>{
        setFocus(true);
    }

    const handleBlur = ()=>{
        setFocus(false);
    }

    return (
        <div className={cn(styles.inputContainer, className, {
            [styles.rounded]: disabled, 
            [styles.disabled]: disabled, 
            [styles.focused]: focus})}
        >
            {Icon}
            <input 
                {...rest} 
                value={value} 
                disabled={disabled}  
                type={showPassword && type == "password" ? "text" : type} 
                className={cn(styles.input, {[styles.disabled]: disabled})}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            {type === 'password' && (
                <Button 
                    onClick={toggleShowPassword} 
                    className={styles.toggleVisibility} 
                    theme="ghost"
                >
                    {showPassword ? <HideIcon /> : <ShowIcon/>}
                </Button>
            )}
        </div>
    );
}

// 1.12.15