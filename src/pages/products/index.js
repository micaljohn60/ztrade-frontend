import Page from "../../share/components/Page";
import { Container, Stack, Typography } from '@mui/material';
import ProductList from "./components/ProductLists";

export default function Products(){
    return(
        <Page title="Products">
            <Container>
                <Typography variant="h4" sx={{ mb: 1, mt:3 }}>
                 Products
                </Typography>

                <ProductList/>
            </Container>
        </Page>
    )
}