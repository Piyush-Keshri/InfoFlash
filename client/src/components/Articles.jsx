import { Box } from "@mui/material";
import { useEffect } from "react";
import { getNews } from "../service/api";


const Articles = () => {

    useEffect(() => {
        dailyNews();
    }, []);

    const dailyNews = async () => {
        let response = await getNews();
    }

    return (

        <Box>
            News
        </Box>

    )

}

export default Articles;