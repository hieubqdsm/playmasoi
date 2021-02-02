import React from "react";
import Room from "./Room";

const RoomList = () => {
    const roomList = [
        {
            Game_Id: 45,
            Room_Title: "Anh em UIT vao day",
            Player_Number: 3,
            Sessions: "Feb 22, 2021 14:00:00"
        },
        {
            Game_Id: 46,
            Room_Title: "Nhom Nghia Chi vao het day",
            Player_Number: 4,
            Sessions: "Feb 22, 2022 14:00:00"
        },
        {
            Game_Id: 47,
            Room_Title: "Anh Em Rap",
            Player_Number: 5,
            Sessions: "Feb 22, 2021 14:00:00"
        }
    ];
    const renderRoom = roomList.map((room) => {
        const Current_date = new Date();
        const Session_Timestamp = new Date(room.Sessions);
        if (Current_date.getTime() > Session_Timestamp.getTime()) {
            return {};
        }
        return <Room Game_Id={room.Game_Id}
                     Room_Title={room.Room_Title}
                     Player_Number={room.Player_Number}
                     key={room.Game_Id}
        />
    });
    return (
        <div>
            {renderRoom}
        </div>
    );
}

export default RoomList;