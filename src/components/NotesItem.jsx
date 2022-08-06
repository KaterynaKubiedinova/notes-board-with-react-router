import { Link } from "react-router-dom";

export default function NotesItem({onDeleteBtnClick, note}) {
	const {id, description} = note;
	
	const onDelete = (e) => {
		e.stopPropagation();
		onDeleteBtnClick(id);
	}

	return (
		<div className="notes-list-item">
			<div className="text_description">
				<Link to={`/:${id}`} state={{note:note}} className="links">{description}</Link>
			</div>
			<div className="delete__btn">
				<i className = "fa-solid fa-trash" onClick={onDelete}></i>
			</div>
		</div>
	)
}