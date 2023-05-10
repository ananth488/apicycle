
import './App.css';
import { useEffect, useState } from 'react';
import Api from './component/Api';

function App() {


  const [apiData, setapiDtate] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(data => {
        setapiDtate(data)
      });
  }, [])



  // const[api,setapi]=useState([])

  //   useEffect(()=>{
  //                     fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
  //                     .then(data=>{return data.json()})
  //                     // .then(user=>{console.log(user)})
  //                     .then(data=>{

  //                         setapi(data);
  //                      console.log(data)
  //                       // console.log(userDetails);

  //                     })
  //                     // .catch(error=>{
  //                     //   return alert(error);
  //                     // })
  //                 },[])


  return (
    <>
      <div className="App">


        {/* {
      api.map((user)=>{
              return(
         
               <p>{user.name}</p>
               )
      })
    } */}

        {
          apiData ?
            (
              apiData.map((pos) => {
                return (
                  <>
                    <div className='container'>
                      <div className='row'>
                        <div className='col'>
                          <div class="card mt-3" >
                            <div class="card-body ">
                              <h1>{pos.id}</h1>
                              <h5 class="card-title">{pos.title}</h5>
                              <p class="card-text">{pos.body}</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>
                        </div>
                        <div className='col'>
                          <div class="card mt-3" >
                            <div class="card-body ">
                              <h1>{pos.id}</h1>
                              <h5 class="card-title">{pos.title}</h5>
                              <p class="card-text">{pos.body}</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>
                        </div>
                        <div className='col'>
                          <div class="card mt-3" >
                            <div class="card-body ">
                              <h1>{pos.id}</h1>
                              <h5 class="card-title">{pos.title}</h5>
                              <p class="card-text">{pos.body}</p>
                              <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


                  </>
                )
              }
              )
            )
            :
            (<h3>Loading...</h3>)
        }
      </div>



    </>

  );
}

export default App;
