import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useRequest from "../hooks/useRequest";
import API from "../utils/APIs";

const Products = () => {
  const history = useHistory();
  const { error, isLoading, result } = useRequest(API.productList);

  const renderContent = () => {
    if (isLoading) return <p>Loading ...</p>;
    if (error) return <p>{error}</p>;
    if (result.products.length > 0)
      return <p>{JSON.stringify(result.products)}</p>;
  };

  return (
    <div>
      <p onClick={() => history.push("/product/1")}>see product 1</p>
      {renderContent()}
    </div>
  );
};

export default Products;
