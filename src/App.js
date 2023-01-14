import React, {useState} from "react";
import SeriesList from "./components/SeriesList";
import {data} from "./data";
import "./components/Style.css"
import {Routes,Route} from "react-router-dom"
import ErrorPage from "./components/ErrorPage"
import Layout from "./Layout";
import HomePage from "./components/HomePage";
import WatchPage from "./components/WatchPage";
import "./components/Style.css";

function App() {
  
  const [series, setSeries] = useState(data)
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
    
      

  return(
    <div className="div">
    <Routes>

    <Route path="/" element={<Layout/>} >

    <Route path="home" element={<HomePage />}/>
    <Route path="Series" 
           element={
      <SeriesList 
       setSeries={setSeries}  
       rating={rating} 
       data={series} 
       series={series}
       search={search} /> 
      } 
       />
     <Route path="product/:id" element={<WatchPage/>}/>
   
    </Route>

      <Route path="*" element={<ErrorPage/>} />

        </Routes>
        </div>
      
    
    
     );
}

export default App;
