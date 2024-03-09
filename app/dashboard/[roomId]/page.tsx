import Room from "@/components/Room";
import { getRoom, getMembers } from "@/lib/rooms";

const page = async ({ params: { roomId } }: any) => {
  const room = await getRoom(roomId);
  const members = await getMembers(roomId);

  return <Room room={room} members={members} />;
};

export default page;
