import { Link } from "react-router-dom";
import { deleteItem } from "../api";

export default function ItemCard({ item, getData }) {
  const handleDelete = async () => {
    if (!window.confirm("Delete this item?")) return;

    try {
      await deleteItem(item.id);
      getData();
    } catch (error) {
      console.error(error);
      alert("Could not delete item.");
    }
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={item.image_url} className="card-img-top" alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>

        <Link to={`/item/${item.id}`}>
          <i className="bi bi-eye-fill"></i>
        </Link>

        <Link to={`/update/${item.id}`} className="m-2">
          <i className="bi bi-pencil-fill"></i>
        </Link>

        <button className="btn btn-link p-0" onClick={handleDelete} aria-label="Delete">
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
}
