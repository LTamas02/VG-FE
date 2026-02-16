import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getItemById, updateItem } from "../api";

export default function UpdateItem() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const loadItem = async () => {
      try {
        const data = await getItemById(id);
        setName(data.name || "");
        setImageUrl(data.image_url || "");
      } catch (error) {
        console.error("Failed to load item:", error);
      }
    };

    loadItem();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name,
      image_url: imageUrl,
    };

    try {
      await updateItem(id, data);
      alert("Update successful");
      navigate("/list");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="m-3 w-25" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Item name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image_url" className="form-label">
            Item image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image_url"
            value={imageUrl}
            onChange={(event) => setImageUrl(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}
