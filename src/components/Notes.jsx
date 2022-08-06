import NotesList from "./NotesList";
import useNotes from "../hooks/useNotes";
import useTheme from "../hooks/useTheme";

export default function Notes() {
	const { remove, save, notes } = useNotes();
	const {theme, setTheme, THEMES} = useTheme();

	const onAddBtnClick = () => {
		const newSticker = {
			description: "Edit me",
		};
		save(newSticker);
	}

	const onDeleteBtnClick = (id) => {
		remove(id);
	}

	const changeTheme = () => {
		if (theme === THEMES.LIGHT) {
			setTheme(THEMES.DARK);
		} else setTheme(THEMES.LIGHT);
	}

	return (
		<div className="notes-board">
			<h1>NOTES</h1>
			<div className="main-buttons">
				<button onClick={changeTheme}>
					{theme === 'light' ? 'Change theme to dark' : 'Change theme to light'}
				</button>
				<button onClick={onAddBtnClick}>Add sticker</button>
			</div>
			<NotesList 
				notes={notes} 
				onDeleteBtnClick={onDeleteBtnClick}/>
		</div>
	)
}