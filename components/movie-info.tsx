import Link from "next/link";
import { API_URL } from "../app/contants";
import styles from "../styles/movie-info.module.css";

export async function getMovies(id: string) {
    console.log(`Fetching movies : ${Date.now()}`);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

type Props = {id: string}
export default async function MovieInfo({id}: Props) {
    const movie = await getMovies(id);

    return(
        <div className={styles.container}>
            <img
                className={styles.poster}
                src={movie.poster_path}
                alt={movie.title}
            />
            
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>

                <div className={styles.side}>
                    <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                    <h3>Screening time : {movie.runtime} M</h3>
                </div>

                <p>{movie.overview}</p>

                <div className={styles.side}>
                    <a 
                        href={movie.homepage}
                        target={"_blank"}
                    >
                        Homepage &rarr;
                    </a>

                    <Link href={`/movies/${id}/credits`}>
                        Credits &rarr;
                    </Link>
                </div>
            </div>
        </div>
    )
}