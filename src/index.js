import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "bootstrap/dist/css/bootstrap.min.css"
import 'material-icons/iconfont/material-icons.css';
import { Toaster } from "react-hot-toast";

ReactDOM.render(
  <React.StrictMode>
    <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "15px",
          },
        }}
      />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
