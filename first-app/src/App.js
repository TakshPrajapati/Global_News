
import './App.css';
import {useState} from "react"
import 'bootstrap/dist/css/bootstrap.css';
import Axios from 'axios';
function App(){
  const [data,setData]=useState([])
  const getData =()=>{
    Axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=75c317c5680f470f98fb34e65d085751")
    .then((response)=>{
      console.log(response);
      setData(response.data.articles)
    })
  }
  return(
    <>
    <div>
    <button className='btn btn-primary' onClick={getData}>Get News</button>
    </div>
    <div className="container">
  <div className="row">
    {
      data.map((value)=>{
        return(
          <div class="card" style={{width:"18rem"}}>
     <img src={value.urlToImage} class="card-img-top" alt="..."/>
     <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">{value.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        )
      })
    }
  </div>
</div>
</>
  )
  
}
export default App;
