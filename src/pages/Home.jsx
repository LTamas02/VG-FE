import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the item app template!</h1>
      <Link className="btn btn-primary" to="/list">
        Continue to items...
      </Link>
    </div>
  );
}
