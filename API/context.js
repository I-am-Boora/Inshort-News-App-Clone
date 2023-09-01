import React,{ createContext, useEffect, useState } from "react";
import { getNewsAPI ,getSourceAPI} from "./api";
import axios from 'axios'

export const NewsContext = createContext()
const Context = ({children})=>{
    const [news,setNews] = useState([])
    const [category,setCategory] = useState('general')
    const [index,setIndex] = useState(1)
    const [source,setSource] = useState()

    const fetchNews = async(reset = category)=>{
        const {data} = await axios.get(getNewsAPI(reset))
        setNews(data)
        setIndex(1)
    }
    const fetchNewsFromSource = async()=>{
        const {data} = await axios.get(getSourceAPI(source))
        setNews(data)
        setIndex(1)
    }
  useEffect(()=>{
    fetchNews()
  },[category])

  useEffect(()=>{
    fetchNewsFromSource()
  },[category])
    return (
    <NewsContext.Provider value={{news,index,setIndex,fetchNews,setCategory,setSource,fetchNews}}>
        {children}
    </NewsContext.Provider>
    )
}
export default Context;