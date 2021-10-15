import React, { useEffect, useState } from "react";
import PageWrapper from "../../components/PageWrapper";
import Header from "./components/Header";
import Sort from "./components/Sort";
import SearchRecord from "./components/SearchRecord";
import SearchBook from "./components/SearchBook";
import Table from "./components/Table";
import TableRecord from "./components/TableRecord";
import axios from "axios";

const SearchMain = () => {
    const [ data, setData] = useState([]);
    // useEffect(() => {
    //     axios.post('/home/drivers')
    //     .then(res => {
    //         setData(res.data.data);
    //     })
    //     .catch(err => err);
    // }, []);
    
    
    return (
        <>
            <div className="page_content">
                <PageWrapper>
                    <div className="col_content">
                        <Header />
                        <hr className="search_line" />
                        <Sort  data={data} setData={setData} />
                        <div className="result_container">
                            {/* <SearchRecord /> */}
                            {/* <SearchBook /> */}
                           {data.length > 0 ? (
                               <Table>
                               {data && data.map((i)=> {
                                   return <TableRecord key={i.nin} nin={i.nin} email={i.email} phoneNumber={i.phone} name={i.surname + ' ' + i.firstname} dateOfBirth={i.birth} />
                               })}
                             </Table>
                           ) : (<SearchRecord /> ) }
                        </div>
                    </div>
                </PageWrapper>
            </div>
        </>
    );
};

export default SearchMain;
