import React, { SyntheticEvent, useEffect, useState } from "react";
import CardList from "../../Components/CardList/CardList";
// import Navbar from "../../Components/NavBar/NavBar";
import ListPortfolio from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import Search from "../../Components/Search/Search";
import { searchCompanies } from "../../api";
import { CompanySearch } from "../../company";
import { PortfolioGet } from "../../Models/Portfolio";
import { portfolioAddAPI, portfolioDeleteAPI, portfolioGetAPI } from "../../Services/PortfolioService";
import { toast } from "react-toastify";

interface Props {}

const SearchPage = (props: Props) => {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);

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
  useEffect(() => {
    getPortfolio();
  }, []);
  const getPortfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        setPortfolioValues(null);
      });
  };
  const onPortfolioCreate = (e: any) => {
    e.preventDefault();
    portfolioAddAPI(e.target[0].value)
      .then((res) => {
        if (res?.status === 204) {
          toast.success("Stock added to portfolio!");
          getPortfolio();
        }
      })
      .catch((e) => {
        toast.warning("Could not add stock to portfolio!");
      });
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteAPI(e.target[0].value).then((res) => {
      if (res?.status == 200) {
        toast.success("Stock deleted from portfolio!");
        getPortfolio();
      }
    });
  };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Search onClick={onClick} handleChange={handleChange} search={search} />
      <ListPortfolio
        portfolioValues={portfolioValues!}
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
