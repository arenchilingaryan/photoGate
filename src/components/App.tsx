import React from 'react';
import Button from 'shared/button/button';
import './App.css';

const Input = React.lazy(() => import('layouts/Input'))

const InputComponent = () => (
  <React.Suspense fallback={<div style={{ background: 'red' }}>Loading...</div>}>
    <Input />
  </React.Suspense>
)

const App = () => {
  return (
    <div className="div">
      Zdarove
      <button role="heading" disabled>
        Privet
      </button>
      <Button />
      <InputComponent />
    </div>
  );
};

export default App;
