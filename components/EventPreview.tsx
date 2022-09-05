import { formatDateFromString } from "services/helpers"
import styled from "styled-components"

const EventContainer = styled.section`
  display : flex;
  padding: 16px;
  width: 50%;  
  border: 2px solid white;
  margin: 20px auto 0 auto;
  @media (max-width: 1168px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 90%;
  }
`
const ImageContainer = styled.div.attrs((props: {imageURL : string}) => props)`
  width: 200px;
  min-width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid rgb(173, 173, 173);
  background-image: url(${props => props.imageURL});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 10% 0 0;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const TextContainer = styled.span`
  margin: 5px 0 0 0;
  font-size: 18px;
  font-weight: 500;
`

export interface Iprops {
  id? : string,
  type? : string,
  genre? : string,
  name : string,
  artists : string,
  location : string,
  date : string,
  imageURL : string
}

const EventPreview = ({name, artists, location, date, imageURL} : Iprops) => {
  return(
    <EventContainer>
      <ImageContainer imageURL = {imageURL}/>
      <InfoContainer>
        <h2>{name}</h2>
        <TextContainer>{artists}</TextContainer>
        <TextContainer>{location}</TextContainer>
        <TextContainer>{formatDateFromString(date)}</TextContainer>
      </InfoContainer>
    </EventContainer>
  )
}

export default EventPreview