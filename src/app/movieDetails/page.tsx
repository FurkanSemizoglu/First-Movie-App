"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const page: React.FC = () => {
  interface MovieData {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
      id: number;
      name: string;
      poster_path: string;
      backdrop_path: string;
    };
    budget: number;
    genres: { id: number; name: string }[];
    overview:string;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    title: string;
    vote_average:number;
    release_date:string;
    status:string;
    // Add other properties as needed
  }
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [movieData, setMovieData] = useState<MovieData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("its working");
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=84b407c4d68abcbbcd5d97262a8f0148`
        );
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        //  const data: MovieData = await response.json();

        console.log("dataa ", response.data);
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="main-area w-[75%] mx-auto flex   my-10" >
      <div className="left-side">
        <img
          className="bg-cover max-h-[550px]"
          src={`https://image.tmdb.org/t/p/w500/${movieData?.poster_path}`}
          alt=""
        />
      </div>
      <div className="right-side  ml-5 px-5 flex flex-col w-1/2 gap-4" >
        <div className="text-white font-semibold text-2xl">{movieData?.title}</div>
        <div className="text-white">{movieData?.overview}</div>
        <div className="text-white">{movieData?.vote_average}</div>
        <div className="text-white">{movieData?.release_date}</div>
        <div className="text-white">{movieData?.status}</div>

      </div>
    </div>
  );
};

export default page;