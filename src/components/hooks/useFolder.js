import { useReducer, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { database, db } from "../../firebase";
import {
  collection,
  getDoc,
  doc,
  orderBy,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

const ACTIONS = {
  SELECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
  SET_CHILD_FOLDERS: "set-child-folders",
  SET_CHILD_FILES: "set-child-files",
  SET_CHILD_LINKS:"set-child-links"
};

export const ROOT_FOLDER = { name: "Root", id: null, path: [] };

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SELECT_FOLDER:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFiles: [],
        childFolders: [],
        childLinks:[]
      };
    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };
    case ACTIONS.SET_CHILD_FOLDERS:
      return {
        ...state,
        childFolders: payload.childFolders,
      };
      case ACTIONS.SET_CHILD_FILES:
      return {
        ...state,
        childFiles: payload.childFiles,
      }
      case ACTIONS.SET_CHILD_LINKS:
      return {
        ...state,
        childLinks: payload.childLinks,
      }
    default:
      return state;
  }
}

export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: [],
    childLinks:[]
  });
  const { currentUser } = useAuth();

  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } });
  }, [folderId, folder]);

  useEffect(() => {
    if (folderId == null) {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    }
    const docRef = doc(database, "folders", folderId);
    getDoc(docRef)
      .then((d) => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: db.formatDoc(d) },
        });
      })
      .catch((e) => {
        console.error(e);
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: ROOT_FOLDER },
        });
      });
  }, [folderId]);

  useEffect(() => {
    const q = query(
      collection(database, "folders"),
      where("parentId", "==", folderId),
      where("userId", "==", currentUser.uid),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      dispatch({
        type: ACTIONS.SET_CHILD_FOLDERS,
        payload: { childFolders: snapshot.docs.map(db.formatDoc) },
      });
    });
    return unsubscribe;
  }, [folderId, currentUser]);

  useEffect(() => {
    const q = query(
      collection(database, "files"),
      where("folderId", "==", folderId),
      where("userId", "==", currentUser.uid),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      dispatch({
        type: ACTIONS.SET_CHILD_FILES,
        payload: { childFiles: snapshot.docs.map(db.formatDoc) },
      });
    });
    return unsubscribe;
  }, [folderId, currentUser]);

  useEffect(() => {
    const q = query(
      collection(database, "links"),
      where("parentId", "==", folderId),
      where("userId", "==", currentUser.uid),
      orderBy("createdAt")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      dispatch({
        type: ACTIONS.SET_CHILD_LINKS,
        payload: { childLinks: snapshot.docs.map(db.formatDoc) },
      });
    });
    return unsubscribe;
  }, [folderId, currentUser]);

  return state;
}
