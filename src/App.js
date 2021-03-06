import { useEffect, useState } from 'react'
// import test from './test'




function App() {
  
  const [fullFetch,setFullFetch] = useState([])
  const [rates,setRates] = useState([])
  const [baseCurrency,setBaseCurrency] = useState('Eur')
  // const [cur,setCur] = useState([])
  const [val,setVal] = useState([])
  
  function handleClick (e) {
    setVal( e.target.value)
  
  }
  useEffect(()=>{    
    fetch('https://api.exchangeratesapi.io/latest')
      .then((resp) => resp.json())
      .then((data) => setFullFetch(data.rates))
  },[])
 

  return (
    <>
      <h1>React App Clean!</h1>
      {/* <Rates /> */}
      <select name={'Curr'} onChange={handleClick}>
        {
          !!fullFetch?
          Object.entries(fullFetch).map(([curr, vall],i)  => (
            <option key={i} value={`${vall} ${curr}`} onChange={(e)=>{handleClick(e) }}>{curr}</option>
            
          )    
          ):<option value="`${baseCurrency}`">{baseCurrency}</option>
        }
      </select>
      <span> {val}</span>
    </>
  )
}

export default App
