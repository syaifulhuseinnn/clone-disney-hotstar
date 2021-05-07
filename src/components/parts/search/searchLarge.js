import React, { useContext } from "react";
import { HeaderContext } from "../header";
import SearchItemLarge from "./searchItemLarge";
import "./style.css";

export default function SearchLarge() {
  const { searchResultLg } = useContext(HeaderContext);
  const img = [
    "https://image.tmdb.org/t/p/w1280/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
    "https://image.tmdb.org/t/p/w1280/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    "https://image.tmdb.org/t/p/w1280/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
    "https://image.tmdb.org/t/p/w1280/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",
    "https://image.tmdb.org/t/p/w1280/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
  ];
  return (
    <div
      id="search-form-large"
      className={
        searchResultLg ? "rounded d-none d-lg-block" : "rounded d-none"
      }
    >
      <div className="px-lg-2">
        {img.slice(0, 3).map((v, i) => (
          <SearchItemLarge key={i} imgSource={v} />
        ))}
      </div>
      <div className="p-2 text-center more-results">
        <span className="text-center">HASIL LEBIH BANYAK</span>
      </div>
    </div>
  );
}
