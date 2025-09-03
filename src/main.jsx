import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

// challange - 1

// root.render(
//   <ul>
//     <li>cars</li>
//     <li>bikes</li>
//   </ul>
// );


// Challange - 2

// function MainComponent() {
//   return (
//     <h1>react is used in frontend by the web developers react is so amazing</h1>
//   );
// }

// root.render(
//   <div className="">
//     <MainComponent />
//   </div>
// );

// challange-3

// const headElement = document.createElement(h1)
// headElement.textContent = "Welcome to react"
// headElement.className = "header"

// const divElement = document.getElementById("root") 
// divElement.appendChild(headElement)
// console.log(document.getElementById("root"));

// challange 4

root.render(
    <div>
        <img src="/src/assets/react.svg" alt="" />
        <div>
            <h1>Fun facts about react</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jorden Walke</li>
                <li>Has well over 100k stars on github</li>
                <li>Is maintained by meta</li>
            </ul>
        </div>
    </div>
)
