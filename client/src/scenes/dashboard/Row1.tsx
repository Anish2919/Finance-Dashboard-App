import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
import { ResponsiveContainer, Area, XAxis, YAxis, Tooltip, AreaChart, LineChart, Line, CartesianGrid, Legend } from 'recharts'; 

const Row1 = () => {
  const { palette } = useTheme();
  
  // getting data use rtk query 
  const { data } = useGetKpisQuery();
  
  // creating function to get profie revenue
  const revenueProfit = useMemo(() => {
    return (
      data && 
      data[0].monthlyData.map(({ month, revenue, expenses }) => {  
        return {
          month: month.substring(0, 3), 
          revenue: revenue, 
          profit: (revenue - expenses).toFixed(2), 
        }
      })
    )
  }, [data]); 
 
  // creating function to get required amt of data from the main data. 
  const revenueExpenses = useMemo(() => {
    return (
      data && 
      data[0].monthlyData.map(({month, revenue, expenses}) => {
        return {
          name: month.substring(0, 3), 
          revenue: revenue, 
          expenses: expenses
        }
      }) 
    )
  }, [data]); 
  
  // data ? console.log('data : ', data) : console.log("no data to show"); 

  return (
    <>
      {/* REVENUSE AND EXPENSES */}
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenuse and Expenses"
          subtitle="top line represents revenue, bottom line represents epenses"
          sideText="+4%" /> 
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart 
            width={500} 
            height={400} 
            data={revenueExpenses}
            margin={{
              top: 15, 
              right: 25, 
              left: -10, 
              bottom: 60,
            }}>
              <defs>
                {/* with the help of id and (<Area> fill url with '#') it references the line chart */}
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset='5%' stopColor={palette.primary[300]} stopOpacity={0.5} />
                  <stop offset='95%' stopColor={palette.primary[300]} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset='5%' stopColor={palette.primary[300]} stopOpacity={0.5} />
                  <stop offset='95%' stopColor={palette.primary[300]} stopOpacity={0} />
                </linearGradient>
              </defs>         
              <XAxis 
                dataKey='name'
                tickLine={false}
                style={{ fontSize: '10px' }}/> 
              <YAxis 
                // axisLine={true}
                tickLine={false}
                domain={[8000, 23000]}
                style={{ fontSize: "10px" }}/> 
                <Tooltip /> 
              <Area 
                type="monotone" 
                dataKey='revenue' 
                dot={true}
                fillOpacity={1}
                stroke={palette.primary.main} 
                fill="url(#colorRevenue)" /> 
              <Area 
                type="monotone" 
                dataKey='expenses'
                dot={true} 
                stroke={palette.primary.main} 
                fill="url(#colorExpenses)" /> 
            </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>
      
      {/* PROFIT & REVENUE */}
      <DashboardBox gridArea="b">
        <BoxHeader 
          title="Profit & Revenue" 
          subtitle="top line chart represents the profit and revenue"
          sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            width={500} 
            height={400}
            data={revenueProfit}
            margin={{
              top: 20, 
              right: 0, 
              left: -10, 
              bottom: 60
            }}>
              <CartesianGrid vertical={false} stroke={palette.grey[800]}/>
              <XAxis 
                dataKey='name' 
                tickLine={false}
                style={{ fontSize: "10px" }}/>
              <YAxis 
                tickLine={false}
                yAxisId="left"
                style={{fontSize:"10px"}}
                />
              <YAxis 
                yAxisId="right"
                orientation="right"
                style={{fontSize:"10px"}}
                /> 
                <Tooltip /> 
                <Legend height={20} wrapperStyle={{ margin: "0 0 1px 0"}} /> 
                <Line yAxisId="left" type="monotone" dataKey="profit" stroke={ palette.tertiary[500] } dot={true} />
                <Line yAxisId="right" type="monotone" dataKey="revenue" stroke={ palette.primary.main } dot={true} />
            </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>      
    </>
  )
}

export default Row1; 

