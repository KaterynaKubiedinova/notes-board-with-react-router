import NotesItem from "./NotesItem"

export default function NotesList({notes, onDeleteBtnClick}) {
	return (
		<div className="notes-list">
			{notes.map((note) => (
				<NotesItem 
					key={note.id} 
					note={note} 
					onDeleteBtnClick={onDeleteBtnClick}
				/>
			))}
		</div>
	)
}