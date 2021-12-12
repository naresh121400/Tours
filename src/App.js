import { useEffect, useState } from 'react';
import Tours from './Tours';
import { client } from './axios';
import Loading from './Loading';
import Refresh from './Refresh';

const  App = () => {
  const[tours, setTours] = useState([]);
  const[loading, setLoading] = useState(true);

  const getTours =  async () => {
    console.log('Tours')
    setLoading(true);
    try{
      const response = await client.get("/");
      setTours(response.data);
      setLoading(false);
    }catch(error){
        setLoading(false);
        console.log(error.message);
    }
    
  };

  const deleteTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    getTours();
  },[]);

  // if(loading){
  //   return(
  //     <main>
  //       <h1 className="mx-auto">Loading...</h1>
  //     </main>
  //   );
  // }
  // if(tours.length === 0){
  //   return(
  //     <main>
  //       <h1>No tours Left</h2>
  //       <button className="btn bg-info">Refresh</button>
  //     </main>
  //   );
  // }

  
  return (
    <main className="container text-center mt-5">
      <h1 className="text-center">Our Tours</h1> 
      <div className="mx-auto bg-info" style={{ width: '10%', height: 3,}}></div>
      {
        loading ? <Loading /> : tours.length === 0 ? <Refresh getTours={getTours}/> : <Tours tours={tours} deleteTour={deleteTour}/>
      }
    </main>
  );
}

export default App;
