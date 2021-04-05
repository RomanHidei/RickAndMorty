import React, {useState, useEffect} from 'react' 
import ReactPaginate from 'react-paginate';
import {Link, useParams} from 'react-router-dom'


function Pagination() {

  let opt = [];
  for (let i=1;i<=34; i++){
    opt.push(<option>{i}</option>)
  }

  const params = useParams();
  const pageNumber = params.pageNumber ? parseInt(params.pageNumber, 10) : 1;
  

  const [pagin, setPagination] = useState()

  useEffect(() => {
    const limit = 12;
    const getPagination = async() => {
      const response = await fetch (
        `https://rickandmortyapi.com/api/character/info/pages?start=${1 + limit * (pageNumber - 1)}&limit=${limit}`);
      const data = await response.json()
      setPagination(data)
      console.log(data)
    }
    getPagination()
  }, [])

      const hasPrevious = pageNumber > 1;
      const hasNext = !!useState.next;
    

    return(
      <div>
      {hasPrevious && (
        <Link to={`/Main/${pageNumber - 1}`}><button type="button">Previos</button></Link>
    )}
        <select>
            {opt}
        </select>
        {hasNext && (
       <Link to={`/Main/${pageNumber + 1}`}><button>Next</button></Link>
    )}
      </div>
      
    )
    
}

export default Pagination