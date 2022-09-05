import styled from "styled-components"

export const PageMainContainer = styled.div`
 display: flex;
 flex-direction: column; 
 align-items: center; 
`
export const PageHeading  = styled.h1`
  color: white;  
  text-align: center;
`
export const ContentWrapper = styled.div`
  width: 100%;
`
export const Paragraph = styled.div`
  text-align: center;
  padding: 10px;
`
export const Container = styled.div`
width: 100%;
max-width: 1440px;
`
export const CustomLink = styled.a.attrs((props: { active? : boolean, isHeaderLink? : boolean}) => props)`
  display: block;
  padding: ${props => props.isHeaderLink ? '16px' : '0'};;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  background-color: ${props => props.active ? 'rgb(41, 0, 0)' : 'inherit'};
  &:hover {
    background-color: ${props => props.isHeaderLink ? 'rgb(76, 0, 0)' : 'inherit'};
  }
`
export const CustomButton = styled.button`
  padding: 12px;
  background-color: transparent;
  border: 2px solid white;
  border-radius: 10px;
  font-size: 18px;
  background-color: #783030;
  transition: all 700ms;
  box-shadow: 4px 4px 8px rgb(31, 31, 31);
  &:hover {
    background-color: rgb(76, 0, 0);
  }
  &:active {
    background-color: rgb(41, 0, 0);
  }
`