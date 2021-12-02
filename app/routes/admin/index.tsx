import { Outlet, Link, useLoaderData } from "remix";

export default function AdminIndex() {
  return (
    <p>
      <Link to='new'>Create a New Post</Link>
    </p>
  );
}
