import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Slide169Homepage from "./pages/Slide169Homepage";
import Slide169Searchresults from "./pages/Slide169Searchresults";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/slide-169-searchresults":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Slide169Homepage />} />
      <Route
        path="/slide-169-searchresults"
        element={<Slide169Searchresults />}
      />
    </Routes>
  );
}
export default App;
