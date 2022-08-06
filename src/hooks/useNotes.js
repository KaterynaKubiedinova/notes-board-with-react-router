import { useCallback, useEffect, useState } from "react";
import {
	getNotesList,
	updateNote,
	createNote,
	deleteNote
} from "../services/notesServices";
import { useBooleanFlag } from "./common"

export default function useNotes() {
	const [notes, setNotes] = useState([]);
	
	const [isLoading, toogleIsLoading] = useBooleanFlag(false);

	const refresh = useCallback(() => {
		toogleIsLoading(true);
		getNotesList().then((data) => {
			setNotes(data);
			toogleIsLoading(false);
		});
		},[toogleIsLoading]);

	const remove = useCallback(
		(id) => {
			toogleIsLoading(true);
			deleteNote(id).then(() => {
				setNotes((notes) => notes.filter((note) => note.id !== id));
				toogleIsLoading(false);
			});
		},
	[toogleIsLoading]);

	const save = useCallback(
		(item) => {
			toogleIsLoading(true);
			if (item.id) {
				updateNote(item).then((data) => {
					setNotes((notes) => notes.map((note) => note.id === item.id ? data : note));
					toogleIsLoading(false);
				});
			} else {
				createNote(item).then((data) => {
					setNotes((prevNotes) => [...prevNotes, data]);
					toogleIsLoading(false);
				})
			}
		},
	[toogleIsLoading]);

	useEffect(refresh, [refresh]);

	return {
		notes,
		isLoading,
		save,
		remove,
		refresh
	};
}