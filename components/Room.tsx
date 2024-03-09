"use client";

import firebase_app from "@/firebase/firebase-config";
import { getAuth } from "firebase/auth";

const Room = ({ room, members }: { room: any; members: any }) => {
  const auth = getAuth(firebase_app);

  return (
    <div className=" h-screen grid place-items-center ">
      <div>
        <h2 className="text-2xl mb-4 text-center font-extrabold">
          Welcome to{" "}
          <span className="text-[#6d2bbf]">
            {room.description}, {auth.currentUser?.email}
          </span>
        </h2>
        <p className="font-bold underline mb-[1rem]">*LOCKED CONTENTS*</p>
        <p className="font-bold underline">Members</p>
        <div className="flex flex-col mt-[0.5rem] italic gap-[0.2rem]">
          {members.map((member: any, index: number) => (
            <p key={index}>{member.user_email}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
