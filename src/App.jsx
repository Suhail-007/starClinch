import { useEffect, useState } from 'react';
import CategoryContext from './context/categoryContext';
import Header from './components/Layout/Header/Header';
import Main from './components/Main/Main';
import Loading from './components/UI/Loading';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b544a52595msh205b4134a4bc558p1b5ba4jsn74a07c845b78',
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
  }
};

// fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=singer', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {

      const getQuery = async function() {
        const res = await fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=singer', options)

        if (!res.ok) {
          throw new Error('Could not fetch selected  query');
        }
        const data = await res.json()
        setData(data);
      }

      getQuery();

    } catch (err) {
      console.error(err)
    }
  }, []);

  return (
    <>
      <CategoryContext.Provider value={
        {
          data: data
        }
      }>
        <Header />
        <main>
          {data.length === 0 && <Loading />}
          {data.length !==0 && <Main /> }
        </main>
      </CategoryContext.Provider>
    </>
  )
}

export default App