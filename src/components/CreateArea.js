import React, {useState} from "react";

function CreateArea(){

    const [note, setNote] = useState({
         title: "",
         content: ""   
    });

    function handleChange(event){
      const {name, value} = event.target;
      setNote(prevNote => {
          return {
              ...prevNote, [name]: value
          }
      })
    }

    function submitNote(){
        
    }

    return (
        <div>
            <form>
                <input name="title" value={note.title} onChange={handleChange} placeholder="Title"/>
                <textarea name="content" value={note.content} onChange={handleChange} placeholder="add a note..." rows="3"/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;