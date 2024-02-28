import { Models } from "appwrite";
import Loader from "./Loader";
import GridPostList from "./GridPostList";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultsProps) => {
  return (
    <>
      {isSearchFetching ? (
        <Loader />
      ) : searchedPosts && searchedPosts.length > 0 ? (
        <GridPostList posts={searchedPosts} />
      ) : (
        <p className="text-light-4 mt-10 text-center w-full">No results found</p>
      )}
    </>
  );
}

export default SearchResults;
