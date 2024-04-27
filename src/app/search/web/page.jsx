import React from "react";

export default async function webSearchPage({ searchParams }) {
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}`
  );
  const data = await response.json();
  const results = data.items;
  return (
    <div>{results && results.map((result) => <h1>{results.title}</h1>)}</div>
  );
}
