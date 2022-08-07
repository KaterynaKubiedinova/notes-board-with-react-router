import NotesList from "./NotesList";
import useNotes from "../hooks/useNotes";
import ChangeThemeBtn from "./changeTheme";

export default function Notes() {
	const { remove, save, notes } = useNotes();

	const onAddBtnClick = () => {
		const newSticker = {
			description: "Edit me",
		};
		save(newSticker);
	}

	const onDeleteBtnClick = (id) => {
		remove(id);
	}

	return (
		<div className="notes-board">
			<div className="main-buttons">
				<ChangeThemeBtn/>
				<button onClick={onAddBtnClick}>Add sticker</button>
			</div>
			<NotesList 
				notes={notes} 
				onDeleteBtnClick={onDeleteBtnClick}/>
		</div>
	)
}