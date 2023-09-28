// Create a custom hook which gets a url and send a GET request.
// useRequest output: { isLoading, error, result }

//  sample usage:

function ApiCall() {
  const { result, isLoading, error } = useRequest(
    "https://dummyjson.com/products"
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {result.length > 0 && <p>{JSON.stringify(result)}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default ApiCall;
