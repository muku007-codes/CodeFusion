import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main1/main";
import Joinpage from "./pages/Joinpage/Joinpage";
import Ide from "./pages/IdePage/ide";
import Editor from "./pages/Editorpage/Editor";
import { Toaster } from "react-hot-toast";
import "./App.css";

// Hot Toaste needs global reach thats why we have to add in App.js

const App = () => {
  return (
    <>
      <div>
        <Toaster
          position='top-center' // we change it in different places like "top-right" etc.
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        ></Toaster>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/ide' element={<Ide />}></Route>
          <Route path='/join' element={<Joinpage />}></Route>
          <Route path='/editor/:roomId' element={<Editor />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
