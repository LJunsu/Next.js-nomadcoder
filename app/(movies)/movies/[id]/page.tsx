import { Suspense } from "react";
import MovieInfo, { getMovies } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({params}: Props) {
    const movie = await getMovies(params.id);
    return {
        title: movie.title
    }
}

type Props = {
    params: {id: string};
}

export default async function MovieDetail({params}: Props) {
    const { id } = params;

    return (
        <div>             
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}