import React, { SyntheticEvent, useState } from "react";
import CardList from "../../Components/CardList/CardList";
// import Navbar from "../../Components/NavBar/NavBar";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);

  const handleChange = (e: any) => {
    setSearch(e.target.value);
    console.log(e);
  };
  const onClick = async (e: SyntheticEvent) => {
    const result = await searchCompanies(search);
    if (typeof result === "string") {
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.find((value) => value === e.target[0].value);
    if (exists) return;
    const updatePortfolio = [...portfolioValues, e.target[0].value];
    setPortfolioValues(updatePortfolio);
    console.log(e);
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    const exists = portfolioValues.filter((value) => {
      return value !== e.target[0].value;
    });
    setPortfolioValues(exists);
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Search onClick={onClick} handleChange={handleChange} search={search} />
      <ListPortfolio
        portfolioValues={portfolioValues}
        onPortfolioDelete={onPortfolioDelete}
      />
      <CardList
        searchResults={searchResult}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
};

export default SearchPage;
