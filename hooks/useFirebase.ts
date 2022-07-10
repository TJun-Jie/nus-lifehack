import { auth, firestore } from "../config/firebase";
import { Post, PostDoc, User } from "../config/interfaces";
import { collection, addDoc, deleteDoc, updateDoc, doc, DocumentData } from "firebase/firestore";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";
import { DataOptions } from "react-firebase-hooks/firestore/dist/firestore/types";

const USER_COLLECTION_NAME = "users";
const userCollectionRef = collection(firestore, USER_COLLECTION_NAME);

const streamOptions: DataOptions<DocumentData> = {
  snapshotListenOptions: { includeMetadataChanges: true },
};

export const useMutations = () => {
  const createUser = async (user: User) => {
    const docRef = await addDoc(userCollectionRef, user);
    console.log(docRef);
    return docRef.id;
  };

  return { createUser };
};

export const useCollectionDetails = (collectionName: string) => {
  const collectionRef = collection(firestore, collectionName);

  const [value, loading, error] = useCollection(collectionRef, streamOptions);
  const documents = value?.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostDoc[];

  return { documents, loading, error };
};

export const useDocumentDetails = (docId: string, collectionName: string) => {
  const docRef = doc(firestore, collectionName, docId);
  const [value, loading, error] = useDocumentData(docRef, streamOptions);

  return { value, loading, error };
};


