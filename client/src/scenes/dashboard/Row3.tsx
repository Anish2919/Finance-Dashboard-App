import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox"
import FlexBetween from "@/components/FlexBetween";
import {  useGetProductsQuery, useGetTransactionsQuery, useGetKpisQuery } from "@/state/api"
// import { GetKpisResponse } from "@/utils/types";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";
import { useMemo } from "react";
import { Cell, Pie, PieChart } from "recharts";

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

const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
];


const Row3 = () => {
  const { palette } = useTheme(); 
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)"); 

  const pieColors = [
    [palette.primary[800]], 
    [palette.primary[300]]
  ]

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

  const { data: kpiData} = useGetKpisQuery(); 
  const { data: productData } = useGetProductsQuery(); 
  const { data: transactionData} = useGetTransactionsQuery(); 
  console.log('transaction Data: ', transactionData); 

  const pieChartData = useMemo(() => {
    if(kpiData) {
      const totalExpenses = kpiData[0].totalExpenses; 
      return Object.entries(kpiData[0].expensesByCategory).map(([key,value]) => {
        return [
          {
            name: key, 
            value: value
          }, {
            name: `${key} of Total`, 
            value: totalExpenses - value
          }
        ]
      })
    }
  }, [kpiData]); 

  if(pieChartData) {
    console.log(pieChartData)
  }
  

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
        <DashboardBox gridArea="i">
            <BoxHeader title="Expense Breakdown By Category" sideText="+4%" subtitle="" /> 
            <FlexBetween gap='0.5rem' textAlign="center" height="100%" width="100%">
              { pieChartData?.map((pieData, index) => (
                <Box key={index} height="100%" width='fit-content' paddingTop="10px" margin="0px 20px">
                  <PieChart 
                    width={70}
                    height={70}
                  >
                    <Pie 
                      data={pieData} 
                      dataKey="value"   
                      fill="#8884d8"
                      innerRadius={isAboveMediumScreens ? 10 : 18}
                      outerRadius={isAboveMediumScreens ? 23 : 32}
                      stroke="none" 
                      >
                      { data01.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={`${pieColors[index]}`} /> 
                      )) }
                    </Pie>
                  </PieChart> 
                  <Typography variant="h6" fontWeight="bold" color='white' >{ pieData[0].name }</Typography>
                </Box>
              )) }
            </FlexBetween>
        </DashboardBox>
        <DashboardBox gridArea="j">
              <BoxHeader title="Expense Breakdown By category" sideText="+4%" subtitle="" /> 
              <Box
                height='15px'
                margin="1.25rem 1rem 0.4rem 1rem"
                bgcolor={palette.primary[800]}
                borderRadius="1rem">
                <Box
                  height='15px' 
                  bgcolor={palette.primary[600]}
                  borderRadius='1rem' 
                  width='40%'>
                </Box>
              </Box>
              <Typography margin='0 1rem' variant="h6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque nisi repellendus distinctio error fuga aut eveniet sint? Mollitia, ut atque. Delectus incidunt cupiditate recusandae voluptatibus quis earum sequi provident itaque nesciunt sapiente, nam accusamus aliquid praesentium optio sunt fugiat dicta quaerat iusto!
              </Typography>
        </DashboardBox> 
    </>
  )
}

export default Row3
