import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import {
  getFirestore,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";

const ItemListContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);

    const queryDb = getFirestore();
    const queryCollect = collection(queryDb, "products");

    let queryFilter;

    if (id) {
      queryFilter = query(queryCollect, where("category", "==", id));
    }

    const fetchData = async () => {
      try {
        const result = id
          ? await getDocs(queryFilter)
          : await getDocs(queryCollect);
        setItem(result.docs.map((p) => ({ id: p.id, ...p.data() })));
      } catch (error) {
        console.error("ERROR", error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 1500);
  }, [id]);

  if (loading) return <Loading />;
  return (
    <div>
      <h2 className="greetdiv">{greeting}</h2>
      <ItemList item={item} />
    </div>
  );
};

export default ItemListContainer;
