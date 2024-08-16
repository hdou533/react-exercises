"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const BASE_URL = "https://dog.ceo/api/breeds/image/random";

const FetchDataWithFetchAPI = () => {
  const [image, setImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null); //race condintion solution

  useEffect(() => {
    const fetchImage = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await fetch(BASE_URL, {
          signal: abortControllerRef.current?.signal,
        });
        if (!response.ok) {
          throw new Error("fetch failed.");
        }
        const data = (await response.json()) as string;
        setImage(data.message);
      } catch (error: any) {
        if (error.name === "AbortError") {
          console.log("Aborted");
          return;
        }
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!abortControllerRef.current) {
      fetchImage();
    }
  }, []);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <div>
          <Image src={image} alt="Dog image" width={500} height={500} />
        </div>
      )}
    </>
  );
};

export default FetchDataWithFetchAPI;
