import React from "react";

import Linkicon from '../design/linkicon'
import Button from '../design/button'


const Topnav = () => {
  return (
    <header className="h-[72px] px-4 flex items-center justify-between sticky top-0 z-20 bg-zinc-900/50 backdrop-blur-md">
      <Linkicon />
      <div>
        <Button title='My Resume'/>
      </div>
    </header>
  );
};

export default Topnav;
