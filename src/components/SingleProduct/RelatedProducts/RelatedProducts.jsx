import Products from "../../Products/Products";
import { relatedProducts } from "../../../constant/relatedProduct"
import useFetch from "../../../hooks/useFetch";

const RelatedProducts = ({ productId, categoryId }) => {
    // const { data } = useFetch(`/api/products?populate=*&filters[id][$ne]=${productId}&filters[categories][id]=${categoryId}&pagination[start]=0&pagination[limit]=4`)

    const data = relatedProducts

    console.log(data);

    return (
        <div className="related-products">
            <Products headingText="Related Products" products={data} />
        </div>
    );
};

export default RelatedProducts;
