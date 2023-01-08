import React, {useState} from "react";
import SeriesList from "./components/SeriesList";
import NavBar from"./components/NavBar";
import {data} from "./data";



function App() {
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  const [series, setSeries] = useState(data)
  
    
      

  return(
    
    <div className="App">
       <NavBar setRating={setRating} setSearch={setSearch} />
       <SeriesList 
       setSeries={setSeries}  
       rating={rating} 
       data={series} 
       series={series}
       search={search}/> 

    

    
    
    </div>
  );
}

export default App;
