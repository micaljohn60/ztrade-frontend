import Page from "../../share/components/Page";
import { Container, Stack, Typography } from '@mui/material';
import ProductList from "./components/ProductLists";

export default function Products({title}){
    return(
        <Page title="Products">
           
                <Typography variant="h4" sx={{ mb: 1, mt:3 }}>
                <i class="fa-solid fa-square"></i> {title ? title : "LATEST UPLOAD"}
                </Typography>
                <ProductList/>
         
        </Page>
    )
}