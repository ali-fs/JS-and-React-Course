import { useParams } from "react-router-dom";
import useRequest from "../hooks/useRequest";
import API from "../utils/APIs";

const Product = () => {
  const { productId } = useParams();
  const { error, isLoading, result } = useRequest(
    `${API.productList}/${productId}`
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {result && <p>{JSON.stringify(result)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Product;
