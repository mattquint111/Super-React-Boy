import React, { useState, useEffect, useHistory } from 'react'




function App() {

  const history = useHistory();

  const startGame = (e) => {
    history.push('/add-movie')
  }

  return (
    <div className='homepageMainCont' onClick={startGame}>
      <h1 className="homepageTitle pretendo">Super-React-Boy</h1>
      <h2 className="pretendo">Press any key to start</h2>
    </div>
  )
}

export default App