import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type Props = {
    params: {id: string};
}

export default async function MovieDetail({params}: Props) {
    const { id } = params;

    return (
        <div>
            <h3>Movie detail page </h3>
             
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>

            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    )
}