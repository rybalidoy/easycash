import React from 'react';
import { Button } from './lib/components/ui/button';
import { useToast } from './lib/components/ui/use-toast';


const App = () => {

  const { toast } = useToast();

  return (
    <React.Fragment>
      <h1 className='font-bold text-red-600 text-6xl p-2 m-1'>Ryan Project Template</h1>
      <h2 className='font-semibold text-teal-500 p-2 m-1'>Tailwind + Shadcn ui</h2>
      <div className='p-2'>
        <Button variant={'default'} onClick={() => {
          toast({
            title: "You clicked me",
            description: "You gay"
        })}}>Click Me</Button>
      </div>
    </React.Fragment>
  );
}

export default App;