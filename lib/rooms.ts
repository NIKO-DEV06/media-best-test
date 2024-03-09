import sql from "better-sqlite3";

const db = sql("rooms.db");

export async function getRooms() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM rooms").all();
}

export async function getRoom(slug: any) {
  return db.prepare("SELECT * FROM rooms WHERE id = ?").get(slug);
}

export async function getMembers(slug: any) {
  return db.prepare("SELECT * FROM room_members WHERE room_id = ?").all(slug);
}

export async function addUserToRoom(user: any) {
  db.prepare(
    "INSERT INTO room_members (room_id, user_email, role) VALUES (@room_id, @user_email, @role)"
  ).run(user);
}
