import { useRouter } from "next/router"
import { PageMainContainer, PageHeader } from "../../customElemets/customStyledElements"
import styled from "styled-components"

const Paragraph = styled.div`
  font-size: 18px;
`

const EventPage = () => {

  const router = useRouter()
  
  
  return (
    <PageMainContainer>
      <PageHeader>
        Event
      </PageHeader>
      <Paragraph>{router.query.id}</Paragraph>
    </PageMainContainer>
  )
}

export default EventPage