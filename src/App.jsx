// src/App.jsx
import React from 'react';
import ProductList from './components/unified/ProductList';
import Footer from './components/unified/Footer';
import Header from './components/unified/Header';









const App = () => {


  return (
    <div>

     {
     /*  <Counter/>
        <ProfileCard/>
        <ProfileCardList />
   <Card>
  <Welcome name="Sara" />
  <Welcome name="Cahal" />
  <Welcome name="Edite" />
  </Card >

  <CardTasarim
        name="John Doe"
        image="/manzara.jpg"
        place="New York"
        shot="Sunset over the skyline"
        followers="1.2K"
        follow="Follow"
      />
 <AlertPage/>

   <MyComp/>
*/}



      <Header />
      <ProductList />
      <Footer />

    </div>
  );
};

export default App;
