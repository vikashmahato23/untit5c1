import React, { useState,useEffect,useCallback } from "react";
import Button from "./components/Button";
import CandidateCard from "./components/CandidateCard";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
 const  [sort,setSort]=useState("Sort by Descending Salary")
 console.log(data,"dd")
  useEffect(()=>{
    getData();
  },[])

  const getData=async ()=>{
    try{
      var res=await fetch(`http://localhost:8080/candidates`)
      var data=await res.json()

      data.sort((a, b) => a.salary - b.salary)
      setData([...data])
    }catch(err){
      console.log(err)
    }
  }


  const DESC = useCallback(() => {
    setData([...data])
    if(sort=="Sort by Descending Salary"){
      setSort("Sort by Ascending Salary")
    }
    else{
      setSort("Sort by Descending Salary")
    }
   
  }, [data]);

  return (
    <div className="App">
      <div>
        <div id="loading-container">...Loading</div>
        <Button id="SORT_BUTTON" title={sort}  onClick={sort} data={data} data1={DESC}   />
        <Button title="PREV" id="PREV" />
        <Button id="NEXT" title="NEXT" />
      </div>
      
      {data.map((item,i) => (
        <div key={i}>
     
       
        <CandidateCard item={item}/>
        </div>
      ))}
    </div>
  );
}
