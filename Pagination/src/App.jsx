import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const dataFunc = async () => {
    const data = await fetch('https://dummyjson.com/products?limit=100')
    const res = await data.json();
    if (res && res.products) {
      setProductData(res.products)
    }
  }

  useEffect(() => {
    dataFunc()
  }, [])

  function pageHandler(pageprop) {
    setPage(pageprop)
  }
  return (
    <>
      {productData.length > 0 && (
        <div className="product">
          {
            productData.slice(page * 10 - 10, page * 10).map((prod) => {
              return (
                <span className='product__single' key={prod.id}>
                  <img src={prod.thumbnail} alt={prod.title} />
                  <span>{prod.title}</span>
                </span>)
            })
          }
        </div>
      )}

      {productData.length > 0 && (<div className='page'>
        {page !== 1 && (
          <span onClick={() => { setPage(page - 1) }}>◀️</span>)}
        {[...Array(productData.length / 10)].map((_, i) => { return (<span className={page === i + 1 ? 'page__style' : ''} onClick={() => { pageHandler(i + 1) }} key={i + 1}>{i + 1}</span>) })}
        {page !== 10 && (<span onClick={() => { setPage(page + 1) }}>▶️</span>)}
      </div>
      )}
    </>
  )
}
export default App
