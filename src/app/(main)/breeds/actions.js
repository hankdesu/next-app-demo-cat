export async function getBreedImage(breed) {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&api_key=live_5EX8mKyUdT8LPVAvA3IX8RrmDnhR7DS8WIehR2QUrwZuep8Sf6XVpIjYFrH5cDMm`);
    const result = await res.json();
    const data = result.pop() || {};

    return data.url
}
