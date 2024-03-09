"use client";

import firebase_app from "@/firebase/firebase-config";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";

const Dashboard = ({ rooms, joinRoom }: any) => {
  const router = useRouter();
  const auth = getAuth(firebase_app);

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl mb-4 text-center font-extrabold text-[#6d2bbf]">
        {auth.currentUser?.email}
      </h1>
      <h2 className="text-2xl mb-4 text-center font-bold">Rooms to Join</h2>
      <div className="divide-y divide-gray-200">
        {rooms.map((room: any) => (
          <form key={room.id} className="py-4">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                joinRoom(room.id, auth.currentUser?.email?.toString());
                router.push(`/dashboard/${room.id}`);
              }}
              className="w-full text-left py-2 px-4 rounded-md bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            >
              {room.description}
            </button>
          </form>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
