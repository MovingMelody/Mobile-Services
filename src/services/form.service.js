import { Timestamp, addDoc, collection } from "firebase/firestore";

import { db } from "../database";
import {
  kCustomerIssuesFirestoreKey as root,
  kBusinessDealsFirestoreKey as root1,
} from "../constants";

const getIssueRef = () => collection(db, root);
const getBusinessDealsRef = () => collection(db, root1);

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
export const submitBusinessDeal = async ({
  userName,
  phone,
  message,
}) => {
  try {
    const businessDealRef = getBusinessDealsRef();
    const docData = {
      userName: userName,
      phone: phone,
      created_at: Timestamp.now(),
      message: message,
    };
    await addDoc(businessDealRef, docData);
    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return Promise.reject("Something went wrong", e);
  }
};
