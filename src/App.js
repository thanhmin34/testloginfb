import { auth } from "./firebase/config";

import { signInWithPopup, FacebookAuthProvider } from "firebase/auth";

function App() {
  const hanldeLoginFB = async () => {
    const provider = await new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((used) => {
        console.log(used.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={hanldeLoginFB}>login fb</button>
    </div>
  );
}

export default App;
