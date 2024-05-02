import {useRouteError} from 'react-router-dom';

function PageNotFound() {

    

  return (
    <div className='m-4 p-4'>
        <h1 className='text-4xl font-bold text-red-500'>Oops!!</h1>
        <h2 className='text-2xl'>Something Went Wrong</h2>
        <h2 className='text-2xl'>404 Page Not Found</h2>
    </div>
  )
}

export default PageNotFound;