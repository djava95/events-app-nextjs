import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import {TextField, InputLabel} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { CustomButton } from 'customElemets/customStyledElements'
import styled from "styled-components"

const ModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(115, 115, 168, 0.711); 
  `
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 0 0 30px 0;  
  background-color: #212121;
  border-radius: 16px;
`

const ModalHeader = styled.div`
  width: 100%;
  position: relative;
`

const Modalheading = styled.h2`
  text-align: center;
`

const ButtonContainer = styled.div`
  position: absolute;
  right: 2px;
  top: 2px;
`

const FormContainer = styled.form`
  width: 90%;
`
const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px auto;
  width: 80%;
`

const TextInputField = styled(TextField)`
  width: 80%;
  color: white;
  border: none;
  outline: 2px solid white;
  border-radius: 10px;
  & fieldset {
    border: none;
  }
  & input {
    border: none;
    color: white;
    padding: 8px;
    &:focus {
      outline: none;
      border: none;
    }
  }
  & .MuiFormHelperText-root {
    position: absolute;
    top: 100%;
    color: #de5050;
    font-size: 14px;
  }
`

const CustomDatePicker  = styled(DatePicker)`
  & button {
    color: white;
  }
`

const customcCalendarStyles = {
  '& .MuiPaper-root' : {
    backgroundColor: 'rgb(54, 54, 54)',
    color: 'white',
    borderRadius: '10px',
  },
  '& .MuiIconButton-root' : {
    color: 'white',
    '&:hover': {
      backgroundColor: '#242424',
    }
  },
  '& .Mui-disabled' : {
    color: 'gray',
  },
  '& .MuiTypography-root': {
    color: 'white',
  },
  '& button.MuiPickersDay-root.MuiPickersDay-today' : {
    backgroundColor: '#743030',
    color: 'white',
  },
  '& button.MuiPickersDay-root.Mui-selected': {
    backgroundColor: 'rgb(76, 0, 0)'
  },
  '& .MuiPickersDay-root:hover': {
    backgroundColor: 'rgb(117, 20, 20)',
    color: 'white',
  }
}

interface Iprops {
  handleClick : ()=> void
}

const EventModal = ({handleClick} : Iprops) => {
  const router = useRouter();
  
  const handleSave = () => {
    handleClick();
    router.push('/events')
  }

  const validationSchema = yup.object({
    name : yup.string().required('Event name is required'),
    type : yup.string().required('Event type is required'),
    artists: yup.string().required('Artists name is reqiured'),
    genre: yup.string().required('Genre is required'),
    location: yup.string().required('Location is required'),
    date: yup.string().nullable().required('Date is required'),
    imageURL: yup.string(), 
  })

  const formik = useFormik({
    initialValues: {
      id: (Math.random()*1000000000).toFixed(),
      name : '',
      type: '',
      artists: '',
      genre: '',
      location: '',
      date: new Date().toString(),
      imageURL : ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await fetch (`https://events-app-8215b-default-rtdb.europe-west1.firebasedatabase.app/events.json`,{
        method: 'POST',
        body: (JSON.stringify(values))
      })
      handleSave()
    },
  })

  const textFieldStyles = {
    width: '60%',
  }
  
  return(
    <ModalContainer data-test-id = 'event-modal'>
      <ModalContent>
        <ModalHeader>
          <Modalheading>Create a new event</Modalheading>
          <ButtonContainer>
            <IconButton onClick={handleClick} data-test-id = 'close-modal'>
              <CloseIcon sx={{ color: 'white' }}/>
            </IconButton>
          </ButtonContainer>
        </ModalHeader>
        <FormContainer onSubmit={formik.handleSubmit} data-test-id = 'forms-container'>
          <FieldContainer>
            <InputLabel htmlFor='name' sx={{color:'white'}}> Event Name :</InputLabel>
            <TextInputField name='name' id='name' 
              value={formik.values.name} onChange={formik.handleChange} 
              helperText={formik.touched.name && formik.errors.name}
            />
          </FieldContainer>
          <FieldContainer>
            <InputLabel htmlFor='type' sx={{color:'white'}}> Event type :</InputLabel>
            <TextInputField name='type' id='type' 
              value={formik.values.type} onChange={formik.handleChange} 
              helperText={formik.touched.type && formik.errors.type}
            />
          </FieldContainer>
          <FieldContainer>
            <InputLabel htmlFor='artists' sx={{color:'white'}}> Artists :</InputLabel>
            <TextInputField name='artists' id='artists' 
              value={formik.values.artists} onChange={formik.handleChange}
              helperText={formik.touched.artists && formik.errors.artists}
            />
          </FieldContainer>
          <FieldContainer>
            <InputLabel htmlFor='genre' sx={{color:'white'}}> Genre :</InputLabel>
            <TextInputField name='genre' id='genre' 
              value={formik.values.genre} onChange={formik.handleChange}
              helperText={formik.touched.genre && formik.errors.genre}
            />
          </FieldContainer>
          <FieldContainer>
            <InputLabel htmlFor='location' sx={{color:'white'}}> Location :</InputLabel>
            <TextInputField name='location' id='location' 
              value={formik.values.location} onChange={formik.handleChange}
              helperText={formik.touched.location && formik.errors.location}
            />
          </FieldContainer>
          <FieldContainer>
            <InputLabel htmlFor='date' sx={{color:'white'}}> Date :</InputLabel>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <CustomDatePicker  name='date' id='date' value={formik.values.date} inputFormat='DD/MM/YYYY' disablePast={true}
                PopperProps={{
                  placement : 'right-end',
                  sx: customcCalendarStyles,
                }}
                onChange={(value) => {
                  formik.setFieldValue('date', value)
                }} 
                renderInput={(params) => <TextInputField {...params} helperText={formik.touched.date && formik.errors.date}/>}
              />  
            </LocalizationProvider>
          </FieldContainer>
          <FieldContainer>
            <InputLabel htmlFor='imageURL' sx={{color:'white'}}> Image URL :</InputLabel>
            <TextInputField name='imageURL' id='imageURL' 
              value={formik.values.imageURL} onChange={formik.handleChange}  
              />
          </FieldContainer>
          <FieldContainer style={{justifyContent: 'center'}}>
            <CustomButton style={{padding: '10px 20px'}} type='submit' id='save-event-btn'>
              Submit
            </CustomButton>
          </FieldContainer>
        </FormContainer>
      </ModalContent>
    </ModalContainer>
  )
}

export default EventModal