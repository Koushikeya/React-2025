import { createRoot } from "react-dom/client";
import HeaderComp from "./Header.jsx"
import MainContent  from "./MainContent.jsx"
import Footer from "./Footer.jsx";

const root = createRoot(document.getElementById("root"));

// part - 2

// destructuring the part - 2

function Random() {
  return (
    <div>
      <HeaderComp />
      <MainContent />
      <Footer />
    </div>
  );
}

root.render(<Random />);
