// import React from 'react';
// import SignIn from '../SignIn';

// function App() {
//   // You might want to use React Router or some other logic
//   // to determine which component to show
//   return <SignIn />;
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
