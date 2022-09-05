import { PageMainContainer, PageHeading, Container, CustomButton } from "../../customElemets/customStyledElements";
import EventPreview from "@/components/EventPreview";
import { API_URL } from "@/config/index";
import styled from "styled-components";


const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`

const LeftContainer = styled.div`
  flex: 1;
`
const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 30px 0 0;
`
const EventsContainer = styled.div`
  padding: 20px;
  width: 100%;
`
export interface Ievent {
  id : string,
  type : string,
  genre : string,
  name : string,
  artists : string,
  location : string,
  date : string,
  imageURL : string
}

interface Iprops {
  events : Ievent[]
}

const Events = ({events} : Iprops) => {
  return (
    <PageMainContainer>
      <Container>
        <PageHeader>
          <LeftContainer></LeftContainer>
          <PageHeading> Events </PageHeading>
          <ButtonContainer>
            <CustomButton> Add event </CustomButton>
          </ButtonContainer>
        </PageHeader>
        <EventsContainer>
        {events?.map(event => (
          <EventPreview  key={event.id} name={event.name} artists={event.artists} location={event.location} date={event.date} imageURL={event.imageURL} />
        ))}
        </EventsContainer>
      </Container>  
    </PageMainContainer>
  )
}

export async function getStaticProps () {
  const res = await fetch (`https://events-app-8215b-default-rtdb.europe-west1.firebasedatabase.app/events.json`)
  const events = await res.json()
  return {
    props : {events}
  }
}

export default Events
