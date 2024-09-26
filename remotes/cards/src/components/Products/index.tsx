import {useProducts} from "./hooks.tsx";
import {IProduct} from "./types.ts";

function Products() {
    const { products, onClick } = useProducts();

    return (
        <div>
            {products?.length > 0 && products?.map(({ id, title }: IProduct) => (
                <div key={id} onClick={() => onClick({ id, title })}>{ title }</div>
            ))}
        </div>
    )
}

export default Products
