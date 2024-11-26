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
} from "./../ui/table";
import Column from "./column";

export default function TableData({ data, children, pageNumberItens = 10 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [columns, setColumns] = useState(React.Children.toArray(children).filter(
        (child) => child.type === Column
    ));
    const rows = data;
    let filters = [];
    columns.map((filter) => {
        filters[filter.props.field] = "";
    });
    const [filtros, setFiltros] = useState(filters);

    const handleFilterCell = (e) => {
        const { name, value } = e.target;
        setFiltros({ ...filtros, [name]: value });
    };

    let filteredItens = rows.filter(row => {
        let retorno = true;
        columns.forEach((column) => {
            if (!String(row[column.props.field]).toLowerCase().includes(String(filtros[column.props.field]).toLowerCase())) {
                retorno = false;
                return;
            }
        });
        return retorno;
    });

    const indexOfLastItem = currentPage * pageNumberItens;
    const indexOfFirstItem = indexOfLastItem - pageNumberItens;

    const currentItems = filteredItens.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(filteredItens.length / pageNumberItens);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column, index) => {
                            return (
                                <TableHead key={index}>{column.props.header}</TableHead>
                            );
                        })}
                    </TableRow>
                    <TableRow>
                        {columns.map((column, index) => {
                            if (column.props.filter === false)
                                return <TableCell key={index} />;
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
                            );
                        })}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {currentItems.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column, colIndex) => (
                                <TableCell key={colIndex}>
                                    {column.props.OnPress ? (
                                       <span
                                       className="font-bold cursor-pointer"
                                       onClick={() => column.props.OnPress(row[column.props.field])}
                                   >
                                       {column.props.textFixed
                                           ? column.props.textFixed
                                           : row[column.props.field]}
                                   </span>
                                    ) : (
                                        row[column.props.field]
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={columns.length} className="text-center">
                            <div className="flex justify-center items-center space-x-2">                                
                                <button
                                    className="p-2 bg-gray-300 rounded disabled:opacity-50"
                                    onClick={() => paginate(currentPage - 1)}
                                    disabled={currentPage === 1}
                                >
                                    {"<"}
                                </button>
                                <span>
                                    Página {currentPage} de {totalPages}
                                </span>
                                <button
                                    className="p-2 bg-gray-300 rounded disabled:opacity-50"
                                    onClick={() => paginate(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                >
                                    {">"}
                                </button>                               
                            </div>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    );
}
