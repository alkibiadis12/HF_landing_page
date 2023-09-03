import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Accounts from "./pages/Accounts";
import Platforms from "./pages/Platforms";
import Tools from "./pages/Tools";
import Education from "./pages/Education";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #555",
            padding: "16px",
            color: "#333",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="accounts" element={<Accounts />} />
            <Route path="platforms" element={<Platforms />} />
            <Route path="tools" element={<Tools />} />
            <Route path="education" element={<Education />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
