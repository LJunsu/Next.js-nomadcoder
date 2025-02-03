import Link from "next/link";
import Credit from "../../../../../components/credit";
import { getMovies } from "../../../../../components/movie-info";
import styles from "../../../../../styles/credits.module.css";
import { API_URL } from "../../../../contants";

export async function getCredits(id: string) {
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

type IParams = Promise <{id: string;}>;
export default async function Credits(props: { params: IParams }) {
    const params = await props.params;
    const movie = await getMovies(params.id);
    const credits = await getCredits(params.id);

    return (
        <div className={styles.container}>
            <Link className={styles.back} href={`/movies/${movie.id}`}>&larr; Back</Link>

            <div className={styles.info}>
                <img
                    className={styles.poster}
                    src={movie.poster_path}
                    alt={movie.title}
                />

                <div>
                    <h1 className={styles.title}>{movie.title}</h1>
                    <p>{movie.overview}</p>
                </div>
            </div>

            <div className={styles.creditbox}>
                <h1>Credits</h1>

                <div>
                    {credits.map((credit, index) => 
                        <Credit
                        key={index}
                        credit={credit}
                        />
                    )}
                </div>
            </div>
        </div> 
    )
}