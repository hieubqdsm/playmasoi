import React from "react";
import Room from "./Room";

const RoomList = () => {
    const roomList = [
        {
            Game_Id: 45,
            Room_Title: "Dzo choi dui anh",
            Player_Number: 3
        },
        {
            Game_Id: 46,
            Room_Title: "Dzo choi dui anh",
            Player_Number: 3
        },
        {
            Game_Id: 47,
            Room_Title: "Dzo choi dui anh",
            Player_Number: 3
        }
    ];
    // const renderRoom = roomList.map((room) => {
    //     return <Room Game_Id={room.Game_Id}
    //                  Room_Title={room.Room_Title}
    //                  Player_Number={room.Player_Number}
    //     />
    // });
    return (
        <div>
            {roomList.map(room =>
                <Room Game_Id={room.Game_Id}
                      Room_Title={room.Room_Title}
                      Player_Number={room.Player_Number}
                />)
            }
        </div>
    );
}

export default RoomList;