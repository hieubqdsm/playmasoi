import React from "react";

const Room = (Game_Id = 0, Room_Title = "", Player_Number = 0) => {
    return (
        <div className="room">
            <ul>
                <li>ID: {Game_Id} / {Room_Title} ({Player_Number}/10)</li>
            </ul>
        </div>
    );
}

export default Room;