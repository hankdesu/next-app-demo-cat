import SelectComponent from './SelectComponent';

async function getBreeds() {
  const res = await fetch('https://api.thecatapi.com/v1/breeds?api_key=live_5EX8mKyUdT8LPVAvA3IX8RrmDnhR7DS8WIehR2QUrwZuep8Sf6XVpIjYFrH5cDMm')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Breeds() {
  const breeds = await getBreeds();
  const options = breeds.map(({ id, name }) => ({ id, name }));

  return (
    <>
      <SelectComponent options={options} />
    </>
  )
}
