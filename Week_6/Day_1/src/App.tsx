import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

// Layout
function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

function NotFound() {
  return <h2>404 — Page Not Found</h2>;
}

const router = createBrowserRouter([
  { path: "/", element: <ProductList /> },
  { path: "/products/:id", element: <ProductDetails /> },
  { path: "/home", element: <Home /> },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      { path: "profile", element: <Profile /> }, // /dashboard/profile
      { path: "settings", element: <Settings /> }, // /dashboard/settings
    ],
  },
  { path: "*", element: <NotFound /> }, // catches any unmatched URL
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
