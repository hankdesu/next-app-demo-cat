import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch('https://api.thecatapi.com/v1/breeds?api_key=live_5EX8mKyUdT8LPVAvA3IX8RrmDnhR7DS8WIehR2QUrwZuep8Sf6XVpIjYFrH5cDMm');
  const breeds = await res.json();

  const params = breeds.map((breed) => ({
    id: breed.id
  }))
  console.log('params: ', params);
  return params
}

export async function getBreedImage(id) {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=live_5EX8mKyUdT8LPVAvA3IX8RrmDnhR7DS8WIehR2QUrwZuep8Sf6XVpIjYFrH5cDMm`
  );
  const result = await res.json();
  const data = result.pop() || {};

  return data.url;
}

export default async function Page({ params }) {
  const { id } = params;
  const url = await getBreedImage(id);

  return (
    <>
      <div className="mt-5 aspect-h-1 aspect-w-1 w-80 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={url}
          alt="breed image"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={300}
          height={300}
        />
      </div>
    </>
  );
}
