import React from "react";

export default async function webSearchPage({ searchParams }) {
  const response = await fetch(
    ` https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY=${process.env.API_KEY}x&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}'}`
  );
  if(!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{' '}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>{results && results.map((result) => <h1>{results.title}</h1>)}</div>
  );
}
