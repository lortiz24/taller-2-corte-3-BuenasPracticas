import { FC } from "react"
import { Box } from "@mui/material"
import { DrawerAppBar } from "../ui/Navbar"

interface Props {
    children: React.ReactNode
}


export const MainLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <DrawerAppBar />
            <Box sx={{
                paddingTop: 8,
                minHeight: '100vh',
                marginTop: 2,
                width: "100%",
                paddingX: { xs: 2, md: 10 }
            }}>
                {children}
            </Box>

        </>
    )
}
