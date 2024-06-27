import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Popover, Switch, Typography } from "@mui/material";
import CustomPagination from "./TablePagination";
import { BsEye, BsEyeFill } from "react-icons/bs";
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";
import { ReceiptCol } from "../../utils/Columns/ReceiptCol";

export default function ReceiptTable({ Data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [OpenModal, setOpenModal] = useState(false);
  const [CurrentIndex, setCurrentIndex] = useState("");
  const modalRef = useRef(null);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (val) => {
    setRowsPerPage(parseInt(val, 10));
    setPage(0);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenModal(false);
        setCurrentIndex("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ borderBottomWidth: 2, borderColor: "#465462" }}>
            <TableRow>
              {ReceiptCol.map((dt, i) => {
                return (
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "Quicksand",
                      backgroundColor: "#D9D9D9",
                      padding: "10px 16px", // Adjust padding as needed
                      height: "40px", // Adjust height as needed
                    }}
                    align="left"
                    key={i}
                  >
                    <div className="text-[14px] text-[#505760]">{dt.title}</div>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {Data.map((data, index) => {
              return (
                <TableRow
                  key={Data._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {ReceiptCol.map((r_col, i) => {
                    let get_data;
                    if (r_col.id === "total")
                      get_data =
                        data["price"] * data["quantity"] || "not specified";
                    else get_data = data[r_col.id] || "not specified";
                    const isLastColumn = i === ReceiptCol.length - 1; // Check if it's the last column
                    console.log(isLastColumn);
                    return (
                      <TableCell
                        sx={{
                          fontWeight: 400,
                          fontFamily: "Quicksand",
                          borderBlockWidth: 0,
                          padding: "8px 16px", // Adjust padding as needed
                          // height: "40px", // Adjust height as needed
                        }}
                        component="th"
                        scope="row"
                        align="left"
                      >
                        <div
                          className={`flex justify-start items-center ${
                            i === 0 && " whitespace-nowrap "
                          } ${
                            isLastColumn
                              ? "border-r-0"
                              : "border-r-[2px] border-r-[#d9d9d9]"
                          }`} // Conditionally apply border-r-0
                        >
                          {get_data}
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <CustomPagination
        count={Data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        RowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </div>
  );
}
