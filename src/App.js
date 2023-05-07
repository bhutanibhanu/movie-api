import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [endPoint, setEndPoints] = useState('')
  const [container, setContainer] = useState([])
  const [finalPoint, setFinalPoint] = useState('')

  
  
  useEffect(()=> {
    fetchMe()
  },[finalPoint])

  const fetchMe = () => {

  fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, {
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "17132d437bmsh10e399fc090eaddp1894acjsne2671d8c6b7b",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      setContainer(data.d)
    })
    .catch(err => console.error(err));
  }

    const onChangeHandler = (e) => {
      setEndPoints(e.target.value)
    }
    const submitHandler = e => {
      e.preventDefault()
      setFinalPoint(endPoint)
    }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value = {endPoint} onChange={onChangeHandler} />
        <button type="submit" >Submit</button>
      </form>

      <div className='block'>
      {container.map((item, index) => {
        return (
          <div key={index} className='block-div'>
          <img src={item.i.imageUrl} alt="" />
          <p>NAME : {item.l}</p>
          <p>ACTORS : {item.s}</p>
          
          </div>
        )
      })}
      </div> 


    </div>
  );
}

export default App;
