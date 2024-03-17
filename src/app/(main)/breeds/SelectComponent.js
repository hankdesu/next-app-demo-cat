'use client';

import { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation';

import Select from '../component/Select';
import { getBreedImage } from './actions';

function SelectComponent({ options }) {
  const [breed, setBreed] = useState('');
  const [breedImage, setBreedImage] = useState('');
  const router = useRouter();
  return (
    <>
      <Select options={options} handleChange={async (e) => {
        const value = e.currentTarget.value;
        const image = await getBreedImage(value);
        setBreed(value)
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
            onClick={() => router.push(`/breeds/${breed}`)}
          />
        )}
      </div>
    </>
  )
}

export default SelectComponent;
