import React from 'react'
import TextField from "@mui/material/TextField";
import { useMemo, useState } from "react";
import {MaterialReactTable, useMaterialReactTable,} from "material-react-table";
import { useDispatch,useSelector } from 'react-redux';
 import {Box, Button, ListItemIcon, MenuItem, Typography,lighten,} from '@mui/material'





function TicketTable() {

  const ticketData= useSelector((state)=>{
    console.log(state)
    return state.TicketData.Ticket
  });




  const [columnFilters, setColumnFilters] = useState([]);

  const data = useMemo(
    () => [...ticketData],

    ticketData
  );

  // Column definitions
  const columns = useMemo(
    () => [
      {
        header: "ID",
        enableClickToCopy: true,
            filterVariant: 'autocomplete',
        accessorKey: "ID",
        
        meta: {
          type: "number",
        },
      },
      {
        header: "Type",
        accessorKey: "Type",
        enableClickToCopy: true,
        filterVariant: 'autocomplete',
        meta: {
          type: "string"
        },
      },
      {
        header: "description",
        accessorKey: "description",
        enableClickToCopy: true,
        filterVariant: 'autocomplete',
        meta: {
          type: "string"
        },
      },
      {
        header: "Status",
        accessorKey: "Status",
        enableClickToCopy: true,
        filterVariant: 'autocomplete',
        meta: {
          type: "string"
        },
      },
      {
        header: "Date",
        accessorKey: "Date",
        filterVariant: 'date',
            filterFn: 'lessThan',
            sortingFn: 'datetime',
        meta: {
          type: "string"
        },
      },

    ],
    []
  );
  const styles = {
    tableHead: {
      backgroundColor: "#F5F5F5",
      borderBottom: "2px solid #ccc",
      color: "black",
      height: "50px",
      zIndex: 1,
     // Set lower z-index for the table header
    },
    tableContainer: {
      boxShadow: "none", // No shadow on the container
    },
    tablePaper: {
      boxShadow: "none", // No shadow on the Paper (table wrapper)
    },
   
  };

  console.log("columnFilters", JSON.stringify(columnFilters));


  const table = useMaterialReactTable({
    columns,
    data,
    muiTableHeadProps: {
      sx: styles.tableHead,
    },
    muiTableContainerProps: {
      sx: styles.tableContainer,
    },
    muiTablePaperProps: {
      sx: styles.tablePaper,
    },
    muiTableHeadRowProps: {
      sx: styles.tableHead, 
    },
    muiFilterTextFieldProps: ({ column }) => {
      const { columnDef } = column;
      const { filterVariant } = columnDef;
      return {
        type: column?.columnDef?.meta?.type,
      };
    },
    enableColumnFilterModes: true,
    onColumnFiltersChange: setColumnFilters,
    initialState: { showColumnFilters: false },
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [5,10, 20, 30],
      shape: 'rounded',
      variant: 'outlined',
    },
    
    
  });

  return <MaterialReactTable table={table} />;

  
}
  


export default TicketTable;
