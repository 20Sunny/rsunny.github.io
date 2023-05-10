import React from 'react';
import earth from '../assets/earth.svg';
import { download } from '../assets';
import { downloadImage } from '../utils';
import Swal from 'sweetalert2';

const Card = ({ _id, name, prompt, photo }) => (
  <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
    <img
      className="w-full h-auto object-cover rounded-xl drop-shadow-d"
      src={photo}
      alt={prompt} onClick={() => Swal.fire({
        imageUrl: photo,
        imageHeight: 512,
        imageAlt: prompt,
        text: prompt,
      })}
    />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 m-2 p-4 glass-hover">
      <p className="text-black text-sm overflow-y-auto prompt font-bold">{prompt}</p>

      <div className="mt-5 flex justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-xs font-bold"><img src={earth} alt={name[0]} /></div>
          <p className="text-black font-medium text-md">{name}</p>
        </div>
        <button type="button" onClick={() => downloadImage(_id, photo, prompt)} className="outline-none bg-transparent border-none">
          <img src={download} alt="download" className="w-6 h-6 object-contain invert" />
        </button>
      </div>
    </div>
  </div>
);

export default Card;
