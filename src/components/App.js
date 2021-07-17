import React, {useState} from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Note from "./Note.js";
//import notes from "../notes.js";
import CreateArea from "./CreateArea.js";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        console.log(newNote);
        setNotes((prevValue) => {
            return [...prevValue, newNote];
        });
    }

    function deleteNote(id){
        console.log("dlete working")
        setNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            })
        })
    }

    return <div>
    <Header />
    {/* {notes.map(function(x){
        return (
        <Note 
            key={x.key}
            title={x.title}
            content={x.content}
        />
    )})} */}
    <CreateArea addNote={addNote}/>

    {notes.map((note, index) => {
        return <Note key={index} id={index} title={note.title} content={note.content} deleteNote={deleteNote}/>
    })}

    <Footer />
</div>
}

export default App;