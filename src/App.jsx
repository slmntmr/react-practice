// src/App.jsx
import React from 'react';

import Card from './compenents/card/card';
import Welcome from './compenents/card/welkome';
import CardTasarim from './compenents/card-tasarim/card-tasarim';
import AlertPage from './compenents/alert/alert-page';




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

*/}


      <AlertPage/>

    </div>
  );
};

export default App;
