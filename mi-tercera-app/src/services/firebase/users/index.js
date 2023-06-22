import {
  getDoc,
  doc,
  getDocs,
  collection,
  getFirestore,
  where,
  query,
} from "firebase/firestore";

const getUser = async (id) => {
  const db = getFirestore();

  const docRef = doc(db, "items", id);

  try {
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    }
  } catch (err) {
    return err;
  } finally {
    console.log("finally");
  }

  return null;
};

const getUsers = async ({ name }) => {
  const db = getFirestore();

  const collectionRef = collection(db, "items");
  let q;

  if (name) {
    q = query(collectionRef, where("name", "==", name));
  }

  try {
    const snapshot = await getDocs(q || collectionRef);

    if (snapshot.size > 0) {
      return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
    return [];
  } catch (err) {
    return err;
  } finally {
    console.log("finally");
  }
};

export { getUser, getUsers };
