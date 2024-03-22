import React ,{useEffect,useState}from 'react'
import axios from 'axios'

const Axios = () => {
  const[data,setData] = useState([]);
   
  function handleValue () {
          
     console.log(data,"ccccccc")
  }


    useEffect(() =>{
    //  axios.get("https://jsonplaceholder.typicode.com/posts")
    //  .then((res) => {
    //     console.log(res,"response")
    //  })
    //  .catch((err) =>{
    //    console.log(err,"err")
    //  })

     const data={
        'name' :'abc',
        "email": "newemail"
     }

     axios.post("https://jsonplaceholder.typicode.com/posts",data)
     .then((res) => {
      setData(res.data.id)  
        console.log(res,"response")
     })
     .catch((err) =>{
       console.log(err,"err")
     })
},[])


  return (
    <div>
    <h1>axios</h1>
    <p>{data}</p>
    <button onClick={handleValue}></button>
    </div>
  )
}

export default Axios