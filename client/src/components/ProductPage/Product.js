import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import Loading from "../Loading/Loading";
import ProductView from "./ProductView";

const Product = () => {
    const {id} = useParams();
    const link = `/api/products/list/${id}`;
    const {data:product , error , isPending} = useFetch(link);
    return ( 
        <div>
            {error && <div> {error} </div>} 
            {isPending && <Loading/>}
            {product && < ProductView product={product}/> }
        </div>);
}

export default Product;