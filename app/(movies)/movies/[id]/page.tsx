import { Suspense } from "react";
import MovieInfo, { getMovies } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { Metadata } from "next";

type IParams = Promise <{id: string;}>;

export async function generateMetadata(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;
    const movie = await getMovies(id);
    return {
        title: movie.title
    }
}

export default async function MovieDetail(props: { params: IParams }) {
    const params = await props.params;
    const id = params.id;

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