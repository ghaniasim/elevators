import React from "react";
import { Provider } from "react-redux";

import store from "./code/state/store";
import Main from "./code/screens/main";

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
