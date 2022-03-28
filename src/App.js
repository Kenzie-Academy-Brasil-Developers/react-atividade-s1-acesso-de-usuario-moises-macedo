import RestrictedPage from './Components/RestrictedPage/Index';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Moisés Alex";

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false)
  }
  return (
    <div className="App">
      <RestrictedPage
      user={user}
      Login={login}
      Logout={logout}
      isLoggedIn={isLoggedIn}
      />
    </div>
  );
}

export default App;
