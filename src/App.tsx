import React from 'react';
import './App.css';
import Modal from './components/Modal';
import Product from './components/Product';
import { useProducts } from './hooks/myHooks';

function App() {

  // ПОЛУЧАЕМ ПАРАМЕТРЫ ИЗ ПОЛЬЗОВАТЕЛЬСКОГО ХУКА
  const {loading, products, handleClickClose, setToggle, modalControl, handleClickOpen } = useProducts()

  return (
    <div className=""   >

<button onClick={() => handleClickOpen()} >Открыть окно</button>
   { modalControl ?  <Modal /> : ''}
   <div onClick={() => handleClickClose()}>

       { loading && <h1>LOADING.......</h1>}
      <button onClick={() => setToggle(toggle => !toggle)}>РЕРЕНДЕР</button>
   {products.map((item) => <Product product={item} key={item.id}  />)} 

   </div>

  </div>
  );
}

export default App;
