import Head from "next/head";
import { ReactNode } from "react";
import { PageMainContainer, ContentWrapper } from "../customElemets/customStyledElements";
import styled from "styled-components"


interface PropsI {
  title? : string,
  description? : string,
  keyWords? : string,
  children? : ReactNode
}
const PageLayout = ({
  title = 'Find your favourite event!',
  description = 'The most awesome app where you can find the best events',
  keyWords = 'events, music, party, DJ, fun',
  children
  } : PropsI) => {

  return(
    <PageMainContainer>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keyWords}/>
      </Head>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </PageMainContainer>
  )
} 

export default PageLayout