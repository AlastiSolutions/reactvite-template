import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/pages/layouts/RootLayout.tsx";
import { HomePage } from "@/pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
