import { useThemeStore } from '../../../stores/themeStore';
import './ThemeToggle.css';

export function ThemeToggle() {
    const mode = useThemeStore((s) => s.mode);
    const toggle = useThemeStore((s) => s.toggle);
    return (
        <button className="theme-toggle" onClick={toggle} aria-label="Переключить тему">
            {mode === 'light' ? '🌞' : '🌙'}
        </button>
    );
}


