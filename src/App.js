import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRec = (recipe) => {
      setRecipes((prevRecipe) => [...prevRecipe, recipe]);
  }
  
  const delRecipe = (index) => {
      setRecipes((prevRecipe) => prevRecipe.filter((_, i) => i !== index));
  }

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} delRecipe={delRecipe}/>
      <RecipeCreate addRec={addRec} />
    </div>
  );
}

export default App;


// import "./App.css";
// import WelcomeBack from "./WelcomeBack";
// import Quote from "./Quote";
// import React, { useState } from "react";
// import CoinTossCounter from "./CoinTossCounter";
// import SubscriberForm from "./SubscriberForm.js";

// const quote = {
//   text:
//     "I am great believer in luck, and I find the harder I work, the more I have of it.",
//   author: "Thomas Jefferson",
// };

// const handleClick = () => {
//   console.log("Subscribing!");
//   alert("You subscribed!");
// };


// function App() {
//   return <SubscriberForm />;
// }


// export default App;
// +++++++++++++++++++++++
// function App() {
//   return <CoinTossCounter />;
// }

// function App() {
//   const [subscribed, setSubscribed] = useState(false);
//   const [subscribedCount, setSubscribedCount] = useState(0);
//   const [alerts, setAlerts] = useState(false);

//   return (
//     <section>
//       <p>Please click to subscribe to my updates!</p>
//       <p>Subscriber Count: {subscribedCount}</p>
//       <button
//         onClick={() => {
//           setSubscribed(!subscribed);
//           setSubscribedCount((currentCount) => currentCount + 1);
//           setSubscribedCount((currentCount) => currentCount + 1);
//           if (!alerts) setAlerts(true);
//         }}
//       >
//         {subscribed ? "Unsubscribe" : "Subscribe"}
//       </button>
//       <button onClick={() => setAlerts(!alerts)}>
//         {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
//       </button>
//     </section>
//   );
//}
// function App() {
//   const [subscribed, setSubscribed] = useState(false);
//   console.log("Subscribed status:", subscribed);
//   return (
//     <section>
//       <p>Please click to subscribe to my updates!</p>
//       <button onClick={handleClick}>Subscribe</button>;
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {subscribed ? "Unsubscribe" : "Subscribe"}
//       </button>
//     </section>
//   );
// }


// const [subscribed, setSubscribed] = useState(false);
// The code above creates a new state variable called subscribed. The useState() function takes the initial value of the state variable (in this case, false). It returns the variable subscribed. It also returns a function, setSubscribed(), which is used to update the state variable.

// The convention for creating a state variable with useState() is to name the function set[VariableName]. So, if the variable is userId, the function will be setUserId().

// Whenever the state is updated, the component re-renders using the new information

// function App() {
//   const [subscribed, setSubscribed] = useState(false);
//   const [alerts, setAlerts] = useState(false);

//   return (
//     <section>
//       <p>Please click to subscribe to my updates!</p>
//       <button onClick={() => setSubscribed(!subscribed)}>
//         {subscribed ? "Unsubscribe" : "Subscribe"}
//       </button>
//       <button onClick={() => setAlerts(!alerts)}>
//         {alerts ? "Stop Email Alerts" : "Get Email Alerts"}
//       </button>
//     </section>
//   );
// }