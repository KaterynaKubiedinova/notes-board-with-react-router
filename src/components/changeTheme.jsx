import useTheme from "../hooks/useTheme";

export default function ChangeThemeBtn() {
	const {theme, setTheme, THEMES} = useTheme();

	const changeTheme = () => {
		if (theme === THEMES.LIGHT) {
			setTheme(THEMES.DARK);
		} else setTheme(THEMES.LIGHT);
	}

	return (
		<div className="main-buttons">
			<button onClick={changeTheme}>
				{theme === 'light' ? 'Change theme to dark' : 'Change theme to light'}
			</button>
		</div>
	)
}