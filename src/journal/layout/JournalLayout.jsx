import { Box, Typography } from "@mui/material"
import { NavBar, SideBar } from "../components"


const drawerWidth = 240

export const JournalLayout = ({ children }) => {
  return (
    <Box
    className="animate__animated animate__fadeIn animate__faster"
      sx={{ display: 'flex' }}
    >
        <NavBar drawerWidth ={ drawerWidth } />

       <SideBar drawerWidth = { drawerWidth } />

        <Box
            component='main'
            sx={{ flexGrow: 1, p: 3, mt:5}}
        >
            {/* Toolbar */}

            { children }

        </Box>

    </Box>
  )
}
