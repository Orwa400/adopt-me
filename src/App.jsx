
import ReactDOM from 'react-dom';
import Pet from "./Pet";


const App = () => {
   <div>
    <h1> Adopt Me! </h1>
    <Pet name="Khalifa" animal="dog" breed="havanese" />
    <Pet name="Casper" animal="cat" breed="mixed" />
    <Pet name="Wunna" animal="bird" breed="Parrot" />
   </div>
  };
  
  const container = document.getElementById("root");
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
             