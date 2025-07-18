import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";
import Homepage from "./pages/Homepage";
import ProductList from "./components/list/ProductList";
import { ListLayout } from "./layouts/ListLayout";
import DebtorList from "./components/list/DebtorList";
import LoginLayout from "./layouts/LoginLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [
      {
        path: "/home",
        element: <Homepage />,
      },
      {
        path: "/home/debtors",
        element: <DebtorList />,
      },
    ],
  },
  {
    path: "/listpage",
    element: <ListLayout />,
    children: [
      {
        path: "/listpage/product-list",
        element: <ProductList />,
      },
    ],
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
