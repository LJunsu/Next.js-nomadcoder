import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    console.log(`Fetching videos : ${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));

    throw new Error("somthing broke...");
    // const response = await fetch(`${API_URL}/${id}/videos`);
    // return response.json();
}

type Props = {id: string}
export default async function MovieVideos({id}: Props) {
    const videos = await getVideos(id);

    return <h6>{JSON.stringify(videos)}</h6>
}