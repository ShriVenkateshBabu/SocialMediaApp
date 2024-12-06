import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from "../DataContext/DataContext";

const Home = () => {
  const { searchResult, error, isLoading } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading && <h1 className="statusMsg">loading...</h1>}
      {error && <h1>{error}</h1>}
      {!error && !isLoading && (searchResult && searchResult.length > 0 ? (
        <Feed 
        posts={searchResult}
        />
      ) : (
        <p style={{ marginTop: "32px" }}>No Posts to display</p>
      ))}
    </main>
  );
};

export default Home;
