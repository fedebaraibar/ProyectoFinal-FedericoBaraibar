import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/Loading";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'products', id);

    getDoc(queryDoc)
      .then((r) => setItem({ id: r.id, ...r.data() }))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, [id]);

  if (loading) return <Loading />;
  return <ItemDetail item={item} />;
}

export default ItemDetailContainer;
