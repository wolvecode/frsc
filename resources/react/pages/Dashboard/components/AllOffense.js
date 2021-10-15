import React from "react";
import SearchRecord from "../../Search/components/SearchRecord";
import Table from "./Table";
import TableRecord from "./TableRecord";

const AllOffense = ({ data }) => {
    return (
        <>
            {data.length > 0 ? (
                <Table>
                    {data &&
                        data.map((i) => {
                            const myDate = new Date(i.created_at);

                            return (
                                <TableRecord
                                    key={i.id}
                                    id={i.id}
                                    date={myDate.toLocaleDateString()}
                                    type={i.offense}
                                    amount={i.penalty}
                                    status={i.paid}
                                />
                            );
                        })}
                </Table>
            ) : (
                <SearchRecord />
            )}
        </>
    );
};

export default AllOffense;
