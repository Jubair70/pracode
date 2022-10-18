import React,{useState,useEffect} from 'react';

const FetchData = () => {
    const [apiData,setApiData] = useState({
        name:'',
        company:'',
        location:''
    });
    const gitHubUrl = "https://api.github.com/users/deekshasharma";
    
    //method 1
    useEffect(()=>{
        fetch(gitHubUrl)
        .then((response)=>{
            if(response.ok){
                return response.json()
            } 
        }).then(res=>{
            setApiData({...res})
            return res;
        });
    },[])

    //method2
    useEffect( ()=>{
        async function fetchData(){
            const response = await fetch(gitHubUrl);
            const res = await response.json();
            setApiData({...res})
        }
        fetchData()
        
    },[])



    
    
    return (
        <>
       <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div >
        <h5 >{apiData.name}</h5>
        <h5>{apiData.location}</h5>
        <h5>{apiData.company}</h5>
      </div>
        </>
    )
}

export default FetchData;