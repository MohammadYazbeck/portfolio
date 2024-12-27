import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import MainPage from "./pages/MainPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/portfolio",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
