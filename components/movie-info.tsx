import { API_URL } from "../app/(home)/page";

async function getMovies(id: string) {
    console.log(`Fetching movies : ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 6000));
    
    const response = await fetch(`${API_URL}/${id}`);
    return  response.json();
}

type Props = {id: string}
export default async function MovieInfo({id}: Props) {
    const movie = await getMovies(id);

    return <h6>{JSON.stringify(movie)}</h6>
}