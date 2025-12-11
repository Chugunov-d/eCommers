import { useTheme } from '@/shared/config';
import { Button } from "@/shared/ui";
import { AppIcon } from "@/shared/ui";
import CircleIcon from '@/shared/assets/icons/Circle.svg?react';

const ThemeSwitcher = () => {
    const {toggleTheme} = useTheme();
    return (
        <Button onClick={toggleTheme}>
            <AppIcon Icon={CircleIcon} filled/>
        </Button>
    );
}

export default ThemeSwitcher;
