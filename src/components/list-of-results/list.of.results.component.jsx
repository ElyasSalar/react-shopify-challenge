import { useEffect, memo } from 'react';
import useFetch from '../../hooks/useFetch';
import ResultLabel from '../result-label/result.label.component';

function ListOfResults({ keyword }){

  const [data, isLoading] = useFetch(keyword);
  
  console.log(data)
  if(isLoading) return <div>Loading...</div>;
  return (
    <div>
      {
        data.map(({Title, Year, Poster, imdbID}) => <ResultLabel key={imdbID} title={Title} year={Year} poster={Poster} />)
      }
    </div>
  )
}

export default memo(ListOfResults);