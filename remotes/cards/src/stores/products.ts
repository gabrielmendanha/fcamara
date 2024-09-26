import { atom, useAtom } from "jotai";
import {IProduct} from "../components/Products/types.ts";

const selectedProducts = atom([] as IProduct[]);

const useSelectedProducts = () => useAtom(selectedProducts);

export default useSelectedProducts;
