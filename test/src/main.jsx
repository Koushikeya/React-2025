import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("root"));

// part - 2

// destructuring the part - 2

// function Random() {
//   return (
//     <div>
//       <HeaderComp />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// root.render(<Random />);

root.render(<App />)

