import { redirectToLocation } from "@root/app/_actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchInput } from "./search-input";

export const SearchForm = () => (
  <form
    className="max-w-screen-sm mx-auto flex transition-al group relative"
    action={redirectToLocation}
  >
    <SearchInput />
    <button
      type="submit"
      className="border-2 border-l-0 rounded-r-full group-focus-within:border-sky-500 dark:group-focus-within:border-indigo-500 dark:border-neutral-600 pr-4 overflow-hidden"
    >
      <div className="block opacity-0 group-focus-within:opacity-100 transition-all duration-400 translate-x-10 group-focus-within:translate-x-0 group-focus-within:text-sky-500 dark:group-focus-within:text-indigo-500">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6" />
      </div>
      <span className="sr-only">Search</span>
    </button>
  </form>
);
