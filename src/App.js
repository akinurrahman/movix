import React, { useEffect } from 'react'
import {fetchDataFromApi} from './utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { getApiConfiguration } from './redux/slices/homeSlice'
const App = () => {
const dispatch = useDispatch()
const {url} = useSelector(state=> state.home)
console.log(url)
  useEffect(()=>{
    apiTesting()
  },[])

  const apiTesting =()=>{
    fetchDataFromApi('/movie/popular')
    .then((res)=>{
      // console.log(res)
      dispatch(getApiConfiguration(res))
    })
  }
  return (
    <div style={{color: "red"}}>
      {url?.total_pages} hello testing
    </div>
  )
}

export default App
