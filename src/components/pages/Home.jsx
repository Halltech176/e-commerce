import React , {useEffect} from 'react'
import { useDispatch} from 'react-redux'
import axios from 'axios'
import Products from './Products'
import {getProduct} from '../redux/PageSlice'

const Home = () => {
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    .catch((error) => {
      console.log(error.message)
    })
    dispatch(getProduct(response.data));
  }
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

    
  return (
    <>
    <Products/>
    </>
  )
}

export default Home