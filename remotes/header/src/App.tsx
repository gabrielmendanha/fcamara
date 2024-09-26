import useProductStore from "remoteCard/products"

function App() {
    const [selectedProducts,] = useProductStore();

  return (
    <div>
        header - { selectedProducts?.map(({ id }) => (<span> {id} -</span>)) }
    </div>
  )
}

export default App
