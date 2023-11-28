import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase/config";

const useFetchDocument = (collectionName, documentID) => {
  const [document, setDocument] = useState(null);

  const getDocument = async () => {
    try {
      const docRef = doc(db, collectionName, documentID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const obj = {
          id: documentID,
          ...docSnap.data(),
        };
        setDocument(obj);
      } else {
        toast.error("Document not found");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
      toast.error("Error fetching document");
    }
  };

  useEffect(() => {
    getDocument();
  }, [documentID]); // Dodano zależność od zmiennej documentID, aby reagować na jej zmiany

  return { document };
};

export default useFetchDocument;
