import { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import { getItems } from "../api";

export default function ListItem() {
  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const data = await getItems();
      setItems(data);
    } catch (error) {
      console.error("Failed to load items:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row d-flex justify-content-center">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} getData={getData} />
      ))}
    </div>
  );
}
