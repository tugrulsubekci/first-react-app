import React from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function AddNote(props) {
    return <div className="note">
        <p>Title</p>
        <input onChange={props.change} type="text" name="title" value={props.title}></input>
        <p>Content</p>
        <textarea onChange={props.change} type="text" name="content" value={props.content} rows="3"></textarea>
        <br />
        <button onClick={props.addItem}><AddCircleOutlineIcon/></button>
    </div>
}

export default AddNote;