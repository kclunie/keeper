import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Note from "./Note.js";
import notes from "../notes.js";
import CreateArea from "./CreateArea.js";

console.log(notes)

function App(){
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
    <CreateArea />
       {notes.map(x =>
        <Note 
            key={x.key}
            title={x.title}
            content={x.content}
        />
    )}
    <Footer />
</div>
}

export default App;