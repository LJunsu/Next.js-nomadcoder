import { Metadata } from "next"
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";

export const metadata: Metadata = {
    title: "Home"
}

// export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();

    return (
        <div className={styles.container}>
            {movies.map(movie => 
                <Movie 
                    key={movie.id}
                    id={movie.id} 
                    title={movie.title}
                    poster_path={movie.poster_path}
                />
            )}
        </div>
    )
}