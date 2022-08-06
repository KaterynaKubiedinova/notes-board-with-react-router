import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useNotes from "../hooks/useNotes"
import useTheme from "../hooks/useTheme";


export default function ChangeNote() {
	const {theme, setTheme, THEMES} = useTheme();
	const {save} = useNotes();
	
	const location = useLocation();
	const {note} = location.state;
	const {description} = note;

	const [title, setTitle] = useState('');
	const [count, setCount] = useState(0);

	const onSave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		
		const newItem = {...note, description: title}
		if (title !== '') {
			save(newItem);
			setCount(1);
		} else setCount(0);
	}

	const changeTheme = () => {
		if (theme === THEMES.LIGHT) {
			setTheme(THEMES.DARK);
		} else setTheme(THEMES.LIGHT);
	}

	const onInputChange = (e) => {
		setTitle(e.target.value);
		setCount(1);
	}

	return (
		<div className="form-wrapper">
			<h1>NOTES</h1>
			<div className="main-buttons">
				<button onClick={changeTheme}>
					{theme === 'light' ? 'Change theme to dark' : 'Change theme to light'}
				</button>
			</div>
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