import { Timestamp, addDoc, collection } from "firebase/firestore";

import { db } from "../database";
import { kCustomerIssuesFirestoreKey as root } from "../constants";

const getIssueRef = () => collection(db, root);

export const submitIssue = async ({
  userName,
  phone,
  deviceType,
  brand,
  model,
  issue,
  comments,
}) => {
  try {
    const issueRef = getIssueRef();
    const docData = {
      userName: userName,
      isResolved: false,
      phone: phone,
      created_at: Timestamp.now(),
      deviceType: deviceType,
      brand,
      model,
      issue,
      comments,
    };
    await addDoc(issueRef, docData);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return Promise.reject("Something went wrong", e);
  }
};
