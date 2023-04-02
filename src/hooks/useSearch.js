import { useState } from "react";

export default function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  function onSearchChange(event) {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  }

  function matchSearch(dataToSearch) {
    const filteredData = dataToSearch.filter(data => {
      const title = data.title.toLowerCase();

      return title.includes(searchTerm);
    });

    if (filteredData.length > 0) {
      return filteredData;
    } else {
      return null;
    }
  }

  return { onSearchChange, matchSearch };
}
