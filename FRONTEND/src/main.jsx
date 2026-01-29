import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from './components/ui/sonner'
import { Provider } from 'react-redux'
import store from './redux/store'


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

    <Toaster />
  </StrictMode>,
);
