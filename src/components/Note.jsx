import DeleteIcon from '@mui/icons-material/Delete';

function Note(params) {
    return(    
        <div className="note">
            <h1>{params.title}</h1>
            <p>{params.content}</p>
            <button onClick={params.delete}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note