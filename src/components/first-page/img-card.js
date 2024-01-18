import React from 'react';
import { ImgTextCard } from './img-text-card';

const ImgCard = () => {
    return (
      <div className="min-h-[250px] rounded w-full md:w-1/2 relative">
      <img
        alt=''
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c806a2e1fd13086ed98f476d8f0aef26345a23a370686bbc20c86e2068ce3464?apiKey=854b1295ef754afa80d463882b8719fe"
        className="min-h-[250px] rounded-md object-cover w-full h-full overflow-hidden max-w-screen-sm"
      />
      <ImgTextCard />
    </div>
    
    );
}

export  {ImgCard};
