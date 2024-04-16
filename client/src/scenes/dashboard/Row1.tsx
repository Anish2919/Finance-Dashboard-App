import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  data ? console.log('data : ', data) : console.log("no data to show"); 
  return (
    <>
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>      
    </>
  )
}

export default Row1; 

