import api from "../api/api";
import { NOTES_URI } from "../constants";

export function getNotesList() {
	return api.get(NOTES_URI).then((resp) => resp.data);
};

export function createNote(note) {
	return api.post(NOTES_URI, note).then((resp) => resp.data);
};

export function updateNote(note) {
	return api.put(NOTES_URI + "/" + note.id, note).then((resp) => resp.data);
};

export function deleteNote(id) {
	return api.delete(NOTES_URI + "/" + id).then((resp) => resp.data);
};