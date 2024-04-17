import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "./../ui/table"
import Column from "./column";


export default function TableData({ data, children }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [columns, setColumns] = useState(React.Children.toArray(children).filter(
        (child) => child.type === Column
    ));
    const [rows, setRows] = useState(data);
    let filters = []
    columns.map((filter) => {
        filters[filter.props.field] = ""
    })
    console.log(filters)
    const [filtros, setFiltros] = useState(filters);

    const handleFilterCell = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    }
    let filteredItens = rows.filter(row => {
        let retorno = true;
        columns.forEach((column) => {
            console.log(!String(row[column.props.field]).includes(String(filtros[column.props.field])))
            if (!String(row[column.props.field]).includes(String(filtros[column.props.field]))) {
                retorno = false;
                console.log("false")
                return;
            }
        })
        return retorno;
    });
    const itemsPerPage = 10;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const currentItems = filteredItens.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Table>                            
                <TableHeader>
                    <TableRow>
                        {columns.map((column, index) => {
                            return (
                                <TableHead key={index}>{column.props.header}</TableHead>
                            )
                        })}
                    </TableRow>
                    <TableRow>
                        {columns.map((column, index) => {
                            return (
                                <TableCell key={index} className="relative mb-3">
                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                                        placeholder={"Filtrar " + column.props.header} name={column.props.field} onChange={handleFilterCell} />
                                    <label htmlFor="exampleFormControlInput1" className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary">
                                        {"Filtrar " + column.props.header}
                                    </label>
                                </TableCell>
                            )
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentItems.map((row, index) => {
                        return (
                            <TableRow key={index}>
                                {columns.map((column) => {
                                    return (
                                        <TableCell key={index}>{row[column.props.field]}</TableCell>
                                    );
                                })}
                            </TableRow>
                        )
                    })}
                    <TableRow>
                    </TableRow>
                </TableBody>
            </Table>
            <div className="flex w-full h-full justify-evenly" colspan="3">
                {Array.from({ length: Math.ceil(filteredItens.length / itemsPerPage) }, (_, index) => (
                    <button key={index} onClick={() => paginate(index + 1)} className="button-paginacao">{index + 1}</button>
                ))}
            </div>
        </>
    )
}