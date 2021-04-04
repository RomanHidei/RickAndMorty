import React, {useState, useEffect} from 'react' 
import ReactPaginate from 'react-paginate';


function Pagination() {

  let opt = [];
  for (let i=1;i<=34; i++){
    opt.push(<option>{i}</option>)
  }
    

    return(
      <>
      <button>Prev</button>
        <select>
            {opt}
        </select>
      <button>Next</button>
      </>
    )
    
}

export default Pagination