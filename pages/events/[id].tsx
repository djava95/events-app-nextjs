import { useRouter } from "next/router"
import { PageMainContainer, PageHeading } from "../../customElemets/customStyledElements"
import styled from "styled-components"

const Paragraph = styled.div`
  font-size: 18px;
`

const EventPage = () => {

  const router = useRouter()
  
  
  return (
    <PageMainContainer>
      <PageHeading>
        Event
      </PageHeading>
      <Paragraph>{router.query.id}</Paragraph>
    </PageMainContainer>
  )
}

export default EventPage