// import React from 'react';
// import SignIn from '../SignIn';

// function App() {
//   // You might want to use React Router or some other logic
//   // to determine which component to show
//   return <SignIn />;
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from '../UserSignUp';
// import SignIn from '../UserSignIn';
// import SignUp from '../HPSignUp';
// import SignIn from '../HPSignIn';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/" element={<SignIn />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../PatientSignUp';
import SignIn from '../PatientSignIn';
import HPSignUp from '../HealthPractitionerSignUp';
import HPSignIn from '../HealthPractitionerSignIn';
import LandingPage from '../Landing/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hp-signin" element={<HPSignIn />} />
        <Route path="/hp-signup" element={<HPSignUp />} />
        <Route path="/p-signin" element={<SignIn />} />
        <Route path="/p-signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
