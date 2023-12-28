import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MovieCard = ({ movie }: any) => {
  /*  const [imageUrl, setImageUrl] = useState("");
  setImageUrl(`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`); */

  /*   useEffect(() => {
    const fetchMovieImages = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/images?api_key=84b407c4d68abcbbcd5d97262a8f0148`);
        console.log("imagee", response.data);
        setImageUrl(response.data); // Assuming response.data contains the URL
      } catch (error) {
        console.error("Error fetching movie images:", error);
      }
    };
    if (movie?.id) {
      fetchMovieImages();
      
    }
  }, [movie?.id]);
 */

  const router = useRouter();
  return (
    <div
     /*  onClick={() => {
        router.push({ pathname: "/post/[pid]", query: { pid: movie?.id } });
      }} */
      //onClick={() => {router.push(`/movieDetails/${movie?.id}`)} }
      onClick={() => {
        router.push(`/movieDetails?id=${movie?.id}`);
      }}
      className="w-1/5 max-h-[400px] relative my-5 cursor-pointer transition ease-in-out hover:translate-y-1 hover:scale-110  duration-300"
    >
      <img
        className="bg-cover max-h-[400px]"
        src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
        alt=""
      />

      <div className="absolute bottom-0 text-white ">{movie?.title}</div>
    </div>
  );
};

export default MovieCard;
