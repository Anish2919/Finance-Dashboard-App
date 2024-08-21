import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox"
import {  useGetProductsQuery, useGetTransactionsQuery } from "@/state/api"
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useMemo } from "react";

const productColumns = [
  {
    field: "_id", 
    headerName:"id", 
    flex: 1, 
  }, 
  {
    field: "expense", 
    headerName: "Expense", 
    flex: 0.5, 
    renderCell: (params: GridCellParams) => `$${params.value}`
  }, 
  {
    field: "price", 
    headerName: "Price", 
    renderCell: (params: GridCellParams) => `$${params.value}`
  }
]; 

const transactionColumns = [
  {
    field: "_id", 
    headerName:"id", 
    flex: 1, 
  }, 
  {
    field: "buyer", 
    headerName: "Buyer", 
    flex: 0.67, 
  }, 
  {
    field: "amount", 
    headerName: "Amount",
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value}`
  }, 
  {
    field: "productIds", 
    headerName: "Count", 
    flex: 0.1, 
    renderCell: (params: GridCellParams) => (params.value as Array<string>).length
  }
]; 


const Row3 = () => {
  const { palette } = useTheme(); 
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)"); 

  const styleForDataGridBox = useMemo(() => {
    return { 
      "& .MuiDataGrid-root": {
        color: palette.grey[300], 
        border: "none", 
      }, 
      "& .MuiDataGrid-cell  ": {
        borderBottom:  `1px solid ${palette.grey[800]}`
      },
      "& .MuiDataGrid-columnHeaders  ": {
        borderBottom: `1px solid ${palette.grey[800]} !important`, 
      }, 
      "& .MuiDataGrid-columnSeperator": {
        visibility: "hidden", 
      }
     }
  }, [palette]); 

  // const { data: kpiData } = useGetKpisQuery(); 
  const { data: productData } = useGetProductsQuery(); 
  const { data: transactionData} = useGetTransactionsQuery(); 
  console.log('trans data: ', transactionData); 
  return (
    <>
        <DashboardBox gridArea="g">
          <BoxHeader title="list of Products" sideText={`${productData?.length} products` } subtitle="" /> 
          <Box
            mt="0.5rem" 
            p="0 0.5rem" 
            sx={isAboveMediumScreens ? {
              height: "60%", 
              ...styleForDataGridBox
            } : {
              height: "75%", 
              ...styleForDataGridBox
            }}>
            <DataGrid   
              columnHeaderHeight={25}
              rowHeight={35}
              rows={productData || []} 
              columns={productColumns}
              hideFooter={true} 
            /> 
          </Box>
        </DashboardBox>
        <DashboardBox gridArea="h">
          <BoxHeader title="Transaction data" subtitle="" sideText={`${transactionData?.length} latest transactions`} /> 
          <Box  
            mt="0.5rem" 
            p="0 0.5rem"
            sx={isAboveMediumScreens ? {
              height: "60%", 
              ...styleForDataGridBox
            } : {
              height: "75%", 
              ...styleForDataGridBox
            }}>
            <DataGrid   
              columnHeaderHeight={25}
              rowHeight={35}
              rows={transactionData || []} 
              columns={transactionColumns}
              hideFooter={true} 
            /> 
          </Box>
        </DashboardBox>
        <DashboardBox gridArea="i"></DashboardBox>
        <DashboardBox gridArea="j"></DashboardBox> 
    </>
  )
}

export default Row3
