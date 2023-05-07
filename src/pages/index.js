import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import {useEffect} from "react";
import {navigate} from "gatsby";

const Home = () => {

    useEffect(()=>{
        navigate(`/products`)
    },[])
   return <Layout/>
}

export const Head = () => <Seo title="Home"/>

export default Home
