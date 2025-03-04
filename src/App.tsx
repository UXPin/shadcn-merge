import React from 'react';
import './App.css';
import { Button, buttonVariants } from "./components/ui/button"


function App() {
  return (
    <div className="App">
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Button</Button>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
}

export default App;
