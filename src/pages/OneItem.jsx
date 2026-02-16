import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemById } from "../api";

export default function OneItem() {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getItemById(id);
        setItem(data);
      } catch (error) {
        console.error("Failed to load item:", error);
      }
    };

    getData();
  }, [id]);

  return (
    <div className="row d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={item.image_url} className="card-img-top" alt={item.name || "item"} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
        </div>
      </div>
    </div>
  );
}
