import { useEffect, useState } from "react";
import { firedb } from "../firebase/config";

export const useCollection = (collection, query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = firedb.collection(collection);

    if (query) {
      ref = ref.where(...query); //...으로 배열을 각각의 값으로 변환 [1,2,3] => (1,2,3)
    }

    const unsub = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        setDocuments(results);
        setError(null);
      },
      (err) => {
        console.log(err);
        setError("데이터를 가져올 수 없습니다.");
      }
    );

    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { documents, error };
};
