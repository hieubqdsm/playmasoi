import React from "react";
function onJoinRoom(room_id) {
    console.log("Da join Room "+room_id);
}
const Room = ({Game_Id = 0, Room_Title = "", Player_Number = 0, Sessions = ""}) => {
    const Current_date = new Date();
    const Session_Timestamp = new Date(Sessions);
    if (Current_date.getTime()>Session_Timestamp.getTime()){
        return ;
    }
    return (
        <div className="room" >
            <ul>
                <li>ID: {Game_Id} / {Room_Title} ({Player_Number}/20)</li>
                <li>End in: {Current_date.toDateString()}</li>
                <li>
                    <button title="Dzoooooooooooo" type="button" onClick={() => onJoinRoom(Game_Id)}>Join Room</button>
                </li>
            </ul>
        </div>
    );
}

export default Room;