import React,{useState,useEffect} from 'react'

const DataFecherComp = () => {

  const[data,setData]=useState([]);
  const[loading,setLoading]=useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Corrected URL
    .then(Response=>Response.json())
    .then(data=>{
      setData(data);
      setLoading(false);
    })
  }, []);
  

  return (
    <>
      {
        loading?(<h1>Loading...</h1>):(
          <ul>
              {data.map(post=>(
                <li key={post.id}>{post.title}</li>
              ))}
          </ul>)
      }    
    </>
  )
}

export default DataFecherComp