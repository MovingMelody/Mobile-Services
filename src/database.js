// import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "./firebase/firebase";

// const USE_EMULATOR = false;

const db = getFirestore(app);

// if (USE_EMULATOR) {
//   connectFirestoreEmulator(db, "localhost", 8081);
// }

export { db };
