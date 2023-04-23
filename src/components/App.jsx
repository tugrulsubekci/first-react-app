import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
    const [notes, setNotes] = useState([]);
    const [newNote, setNote] = useState({title: "", content: ""});

    function updateNewItem(event){
        const value = event.target.value;
        const name = event.target.name;
        setNote((prev)=>{
            console.log(prev);
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function addItem(){
        setNotes(prev => {
            return [...prev, newNote];
        })

        setNote({title: "", content: ""});
    }
    function deleteItem(id){
        console.log("delete item id: " + id);
        setNotes(prev => {
            return prev.filter((item,index) => index !== id);
        })
    }

    return (    
        <>
            <Header />
            <AddNote addItem={addItem} change= {updateNewItem} title={newNote.title} content={newNote.content}/>
            {notes.map((note,index)=><Note 
                delete={()=> {
                    deleteItem(index);
                }} 
                key={index} 
                title={note.title} 
                ontent={note.content}
             />)}
            <Footer />
        </>
    )

}

export default App;