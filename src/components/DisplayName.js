import React, {useState} from "react";

let textInput = React.createRef();

function getNewDisplayName() {
    textInput.current.focus();
    console.log(textInput.current.value);
}

const DisplayName = () => {
    // let display_name = React.state.display_name ? React.state.display_name : "NULL";
    const [displayName, setDisplayName] = useState("Please Set A Name");
    return <div className="display_name">
        <h3>{displayName}</h3>
        <input type="text" ref={textInput} className="name_input"/>
        <button onClick={() => setDisplayName(textInput.current.value?textInput.current.value:"Please Set A Name")}>Change Name</button>
    </div>
};
export default DisplayName;