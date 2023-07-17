import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';


function App() {
  return (
    <div className="App">
        {/* header */}
        <Header />

        <div className='app__body'>
            {/* sidebar */}
            <Sidebar />

            {/* feed */}
            <Feed />

            {/* widgets */}
            <Widgets />
        </div>
    </div>
  );
}

export default App;
