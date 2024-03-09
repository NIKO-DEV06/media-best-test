const sql = require("better-sqlite3");
const db = sql("rooms.db"); // Update the database file name if necessary

// Define dummy data for rooms
const dummyRooms = [
  { description: "Room 1" },
  { description: "Room 2" },
  { description: "Room 3" },
  { description: "Room 4" },
  { description: "Room 5" },

  // Add more dummy room objects as needed
];

const dummyRoomMembers = [
  { room_id: 1, user_email: "user1@gmail.com", role: "user" },
  { room_id: 1, user_email: "user2@gmail.com", role: "user" },
  { room_id: 2, user_email: "user3@gmail.com", role: "user" },
  { room_id: 2, user_email: "user4@gmail.com", role: "user" },
  { room_id: 3, user_email: "user5@gmail.com", role: "user" },
  { room_id: 3, user_email: "user6@gmail.com", role: "user" },
  { room_id: 4, user_email: "user7@gmail.com", role: "user" },
  { room_id: 4, user_email: "user8@gmail.com", role: "user" },
  { room_id: 5, user_email: "user9@gmail.com", role: "user" },
  { room_id: 5, user_email: "user10@gmail.com", role: "user" },

  { room_id: 1, user_email: "moderator1@gmail.com", role: "moderator" },
  { room_id: 2, user_email: "moderator1@gmail.com", role: "moderator" },
  { room_id: 3, user_email: "moderator1@gmail.com", role: "moderator" },
  { room_id: 4, user_email: "moderator1@gmail.com", role: "moderator" },
  { room_id: 5, user_email: "moderator1@gmail.com", role: "moderator" },

  { room_id: 1, user_email: "moderator2@gmail.com", role: "moderator" },
  { room_id: 2, user_email: "moderator2@gmail.com", role: "moderator" },
  { room_id: 3, user_email: "moderator2@gmail.com", role: "moderator" },
  { room_id: 4, user_email: "moderator2@gmail.com", role: "moderator" },
  { room_id: 5, user_email: "moderator2@gmail.com", role: "moderator" },

  // Add more dummy room member objects as needed
];

// Create rooms table
db.prepare(
  `
   CREATE TABLE IF NOT EXISTS rooms (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       description TEXT NOT NULL
   )
`
).run();

// Create room members table
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS room_members (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    room_id INTEGER NOT NULL,
    user_email TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('user', 'moderator')),
    FOREIGN KEY (room_id) REFERENCES rooms(id),
    UNIQUE(room_id, user_email)
)
`
).run();

// Function to populate rooms table with dummy data
function populateRooms() {
  const stmt = db.prepare("INSERT INTO rooms (description) VALUES (?)");
  for (const room of dummyRooms) {
    stmt.run(room.description);
  }
}

// Function to populate room members table with dummy data
function populateRoomMembers() {
  const stmt = db.prepare(
    "INSERT INTO room_members (room_id, user_email, role) VALUES (?, ?, ?)"
  );
  for (const member of dummyRoomMembers) {
    stmt.run(member.room_id, member.user_email, member.role);
  }
}

// Populate rooms table
populateRooms();

// Populate room members table
populateRoomMembers();
