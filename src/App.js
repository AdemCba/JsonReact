import "./App.css";
import React, { useState } from "react";
import JsonData from "./isimler.json";
import ReactPaginate from "react-paginate";

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 10));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 1;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user">
          <h3> İsim  : {user.Ad}</h3>
          <h3> Soyisim :   {user.Soyad}</h3>
          <h3> Favori Meyve:  {user.FavoriMeyve}</h3>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate
        previousLabel={"Geri"}
        nextLabel={"İleri"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;