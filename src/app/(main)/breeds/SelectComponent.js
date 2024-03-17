'use client';

import { useState } from 'react';
import Image from 'next/image'

import Select from '../component/Select';
import { getBreedImage } from './actions';

function SelectComponent({ options }) {
  const [breedImage, setBreedImage] = useState('');
  return (
    <>
      <Select options={options} handleChange={async (e) => {
        const value = e.currentTarget.value;
        const image = await getBreedImage(value);
        setBreedImage(image);
      }} />
      <div className="mt-5 aspect-h-1 aspect-w-1 w-80 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
        {breedImage && (
          <Image
            src={breedImage}
            alt="breed image"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            width={300}
            height={300}
          />
        )}
      </div>
    </>
  )
}

export default SelectComponent;
