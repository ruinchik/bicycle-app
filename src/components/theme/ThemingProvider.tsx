const mapToCssVars = (theme: Record<string, string>) => ({
    '--bg': theme.background,
    '--surface': theme.surface,
    '--text': theme.text,
    '--muted-text': theme.mutedText,
    '--primary': theme.primary,
    '--border': theme.border,
    '--accent': theme.accent,
    '--success': theme.success,
    '--warning': theme.warning,
    '--error': theme.error,
});


