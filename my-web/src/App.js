import React from 'react';
import NavApp from './utils/SideNavigation';
import FingerTieRobotPage from './Page/FingerTieRobotPage';

const App = ()=>{
  return (
    <div className='absolute'>
      <div className='absolute'> 
        <NavApp/>
        <div className='relative -top-[900px] left-[300px]'>
          <FingerTieRobotPage/>
        </div>
      </div>
    </div>
  );
} 
export default App;