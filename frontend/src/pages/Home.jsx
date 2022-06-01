import React,{useState} from 'react';

export default function Home() {
  const [inputval1, setinputval1] = useState("")
    const [inputval2, setinputval2] = useState("")
    const [inputval3, setinputval3] = useState("")
    const [inputval4, setinputval4] = useState("")
    const [inputval5, setinputval5] = useState("")
    const [state, setstate] = useState("")
    const mean=()=>{
        // console.log(inputval1);
        // setstate(inputval1 + inputval2)
      //  const mean=(inputval1+inputval2)
        // setstate(`${inputval1} + ${inputval2} = ${add} `);
        let sum=0;
        const arr =[inputval1,inputval2,inputval3,inputval4,inputval5]
        for(let i=0; i<arr.length; i++ ){
          sum += arr[i];
        }
        const result= sum/arr.length;
        setstate(result)
        
    }
    const median=()=>{
      const arr =[inputval1,inputval2,inputval3,inputval4,inputval5]
     const arrsorted=arr.sort((a,b)=>a-b);
   const result= arrsorted.length %2 ===0 ? (arrsorted[arrsorted.length/2-1]+arrsorted[arrsorted.length/2]/2) : arrsorted[Math.floor(arrsorted.length/2)]
        setstate(result);
        
    }
    const mode=()=>{
      const arr =[inputval1,inputval2,inputval3,inputval4,inputval5]
      const mode = {};
      let max = 0, count = 0;
    
      for(let i = 0; i < arr.length; i++) {
        const item = arr[i];
        
        if(mode[item]) {
          mode[item]++;
        } else {
          mode[item] = 1;
        }
        
        if(count < mode[item]) {
          max = item;
          count = mode[item];
        }
      }
   setstate(max)    
    }
    return (
        <div>
            
            <div className="container align-items-center  mt-5">
               <div className="row">
                   <div>
                        <div className="card">
                            <div className="card-header bg-primary"><h1 className='text-center'>CALCULATOR</h1></div>
                            <div className="card-body bg-warning">
                            <h1> {state}</h1>
         <input type="number" className='form-control' placeholder='Enter no' onChange={(event)=>{
        const {value}=event.target
        setinputval1(parseInt(value))}}  />
               <br />
               <input type="number" className='form-control'  placeholder='Enter no' onChange={(event)=>{
        const {value}=event.target
        setinputval2(parseInt(value))}} />
               <br />
               <input type="number" className='form-control'  placeholder='Enter no' onChange={(event)=>{
        const {value}=event.target
        setinputval3(parseInt(value))}} />
               <br />
               <input type="number" className='form-control'  placeholder='Enter no' onChange={(event)=>{
        const {value}=event.target
        setinputval4(parseInt(value))}} />
              <br />
               <input type="number" className='form-control'  placeholder='Enter no' onChange={(event)=>{
        const {value}=event.target
        setinputval5(parseInt(value))}} />
              <br />
               
                   <hr />
               <div className="btn-group w-100 text-uppercase">
               <button onClick={mean} className='btn btn-outline-primary btn-danger text-uppercase'>mean</button>
               <button onClick={median} className='btn btn-outline-primary btn-success text-uppercase'>median</button>
               <button onClick={mode} className='btn btn-outline-primary btn-danger text-uppercase'>mode</button>
               </div>
               </div>
                      </div>
                        </div>
                   </div>
               </div>
                
            </div>
       
    )
}
