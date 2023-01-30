import React from 'react'
import HeaderUser from '../general/HeaderUser'
import WebsiteFooter from '../general/WebsiteFooter'
import PageContents from './PageContents'
import ViewTrainingOpportunities from "../Homepage/ViewTrainingOpportunities"



const Homepage = () => {
  return (
    <>
    <HeaderUser />
    <PageContents />
    <ViewTrainingOpportunities />
    <WebsiteFooter />
    </>
  )
}

export default Homepage