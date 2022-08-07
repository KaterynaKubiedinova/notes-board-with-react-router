import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useNotes from "../hooks/useNotes"
import ChangeThemeBtn from "./changeTheme";

export default function ChangeNote() {
	const {save} = useNotes();
	
	const location = useLocation();
	const {note} = location.state;
	const {description} = note;

	const [title, setTitle] = useState('');
	const [count, setCount] = useState(0);

	const onSave = (e) => {
		setCount(1);
		e.preventDefault();
		
		const newItem = {...note, description: title}
		if (title !== '') {
			save(newItem);
		} else setCount(0);
	}

	const onInputChange = (e) => {
		setTitle(e.target.value);
		setCount(1);
	}

	return (
		<div className="form-wrapper">
			<ChangeThemeBtn/>
			<form onSubmit={onSave} className={"edit-form"}>
				<input
					type={'text'}
					onChange={onInputChange}
					onBlur={onSave}
					value={count === 0 ? description : title}>
				</input>
				<div className="form-link-wrapper" onClick={onSave}>
					<Link to={"/"}  className="links">Save</Link>
				</div>
			</form>
		</div>
	)
}