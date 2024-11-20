
import './App.css'
import Header from './components/Header'
import Drawer from '@mui/material/Drawer';
import PageContainer from './container/PageContainer'
import RouterConfig from "../src/config/RouterConfig"
import Loading from './components/Loading'
import { useDispatch, useSelector } from 'react-redux';
import { calculateBasket, deletefromBasket, setDrawer } from './redux/slices/basketSlice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer';



function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const location = useLocation()

  useEffect(() => {
    dispatch(calculateBasket())
  }, [products])

  return (
    <>
      <PageContainer> {/* pagecontainer içerisine children olarak altındaki componentleri verdim guzel dursun diye */}

        <Header />
        <RouterConfig /> {/* bütün routes ve route lerı burada göstermek yerine buraya bu şekilde bir komponent tanımlayarak içerisinde yaptım  */}

        <Loading /> {/* sayfa yuklenırken yuvarlak bekleme loadıngı yukleme */}

        <Drawer anchor='right' onClose={() => dispatch(setDrawer())} open={drawer} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: "20px" }}>
                    <img style={{ marginRight: "15px", marginTop: "25px" }} src={product.image} width={50} height={50} />
                    <p style={{ width: "350px" }}>{product.title} ({product.count})</p>
                    <p style={{ width: "65px", fontWeight: "bold" }}>{product.price} TL</p>
                    <button onClick={() => { dispatch(deletefromBasket({ id: product.id })) }} style={{ padding: "10px", border: "none", borderRadius: "10px", width: "70px", backgroundColor: "orange", color: "#fff" }}>Sil</button>
                  </div>

                </div>
              )
            })
          }
          <div style={{ textAlign: "center" }}> <p style={{ fontFamily: "arial", fontWeight: "bold", fontSize: "20px" }}> toplam Tutar : {totalAmount.toFixed(2)}</p>  </div>

        </Drawer>
        {location.pathname === '/' && <Footer />}
      </PageContainer >
    </>
  )
}

export default App
