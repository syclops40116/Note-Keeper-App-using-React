import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Add from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  let [isExpanded, setisExpanded] = React.useState(false);
  
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  let expand = () => {
    setisExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
        name="title"
        onChange={handleChange}
        value={note.title}
        placeholder="Title"
      />}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <Add />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
