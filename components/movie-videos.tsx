import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
    console.log(`Fetching videos : ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

type Props = {id: string}
export default async function MovieVideos({id}: Props) {
    const videos = await getVideos(id);

    return (
        <div className={styles.container}>
            {videos.map(video => 
                <iframe 
                    key={video.id} 
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            )}
        </div>
    )
}