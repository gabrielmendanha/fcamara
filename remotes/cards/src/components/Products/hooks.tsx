import {useQuery} from "@tanstack/react-query";
import {api} from "../../services/api.ts";
import {IProduct} from "./types.ts";
import useSelectedProducts from "../../stores/products.ts";

export function useProducts() {
    const [selectedProducts, setSelectedProducts] = useSelectedProducts();

    const { data } = useQuery({
        queryKey: ['products-list'],
        queryFn: async () => await api.get(`products`),
    });

    const insertOrRemoveProduct = (index: number, product: IProduct) => {
        if (index === -1) { selectedProducts.push(product); } else { selectedProducts.splice(index, 1); }
    }

    const onClick = (product: IProduct) => {
        const index = selectedProducts.findIndex(({ id }) => id === product.id);

        insertOrRemoveProduct(index, product);

        setSelectedProducts([...selectedProducts]);
    }

    return { products: data?.data?.products, onClick }
}
