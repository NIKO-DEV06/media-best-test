import { addUserToRoom, getRooms } from "@/lib/rooms";
import Dashboard from "@/components/Dashboard";

const page = async () => {
  const rooms = await getRooms();

  const joinRoom = async (roomId: any, email: any) => {
    "use server";
    try {
      const user = {
        room_id: roomId,
        user_email: email,
        role: "user",
      };
      addUserToRoom(user);
    } catch (error) {
      console.log(error);
    }
  };

  return <Dashboard rooms={rooms} joinRoom={joinRoom} />;
};

export default page;
