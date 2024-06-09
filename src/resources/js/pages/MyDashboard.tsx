import { Button } from "@/lib/components/ui/button";
import { toast } from "@/lib/components/ui/use-toast";
import React from "react";


const MyDashboard = () => {
  return (
    <React.Fragment>
      <div> 
        <h1 className='font-bold text-red-600 text-6xl p-2 m-1'>Ryan Project Template</h1>
        <h2 className='font-semibold text-teal-500 p-2 m-1'>Tailwind + Shadcn ui</h2>
        <div className='p-2'>
          <Button variant={'default'} onClick={() => {
            toast({
              title: "You clicked me",
              description: "You gay"
          })}}>Click Me</Button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default MyDashboard;