import React from 'react';
import { Button } from './lib/components/ui/button';
import { useToast } from './lib/components/ui/use-toast';
import Navbar from './components/generic/Navbar';
import { routes } from './routes/routes';
import { Outlet } from 'react-router-dom';


const App = () => {

  const { toast } = useToast();

  return (
    <React.Fragment>
      <div className='grid grid-cols-12 grid-flow-row-dense p-4'>
        <div className='col-span-2'>
          <Navbar items={routes}/>
        </div>
        <div className='col-span-10 p-4'>
          <Outlet />
        </div>
      </div>


      
    </React.Fragment>
  );
}

export default App;