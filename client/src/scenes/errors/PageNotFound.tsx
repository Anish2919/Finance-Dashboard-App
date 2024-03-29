import { Box, Typography } from "@mui/material"


const PageNotFound = () => {
  return (
    <Box color="primary.main" sx={{ textAlign: "center", marginTop: "20px" }}>
        <Typography variant="h1" mb="0.75rem">Page not found</Typography>
        <Typography variant="body2">Please go to the correct directory.</Typography>
    </Box>
  )
} 

export default PageNotFound
