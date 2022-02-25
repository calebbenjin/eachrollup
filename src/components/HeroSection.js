import { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import Container from './Container'
import LandingImage from '@/public/mobile.png'
import Button from './Button'
import Modal from './Modal'
import {
  BsCheckCircleFill,
} from 'react-icons/bs'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import ScrollAnimation from 'react-animate-on-scroll'

const HeroSection = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [showModal, setShowModal] = useState(false)
  const [showMoreWaitList, setShowMoreWaitList] = useState(false)
  const [copyLink, setCopyLink] = useState(false)

  const handleModal = () => {
    setShowModal(true)
  }

  const handleShowMoreWaitList = () => {
    setShowMoreWaitList(!showMoreWaitList)
  }

  const numberOfItems = showMoreWaitList ? waitlist.length : 3

  const handleCopyLink = () => {
    setCopyLink(!copyLink)
  }

  const onSubmit = (data) => console.log(data)

  return (
    <HeroContainer className='heroBackground'>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <ModalBody>
          <h2>Get early access, Buy indexes</h2>

          <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <Input
                  type='email'
                  placeholder='Email address'
                  {...register('email', { required: true })}
                />
                {errors.email && <span>Email is required</span>}
              </FormControl>
              <Button type='submit'>Join Waitlist</Button>
            </form>
          </FormContainer>

          <small>
            I am already on the list, I want to{' '}
            <Link href='/'>
              <a>
                <b>join Community</b>
              </a>
            </Link>
          </small>
        </ModalBody>
      </Modal>
      <Container>
        <Flex>
          <HeroContent>
            <ScrollAnimation animateIn="fadeInDown" duration={2}>
              <HeroHeading>
                Crypto bundles for everyone, grow your money from as little as
                $1
              </HeroHeading>
            </ScrollAnimation>
            <ListContainer>
              <List>
                <BsCheckCircleFill className='check' />
                <p>Access a curated selection of crypto bundles</p>
              </List>
              <List>
                <BsCheckCircleFill className='check' />
                <p>Invest and diversify your portfolio like a professional</p>
              </List>
              <List>
                <BsCheckCircleFill className='check' />
                <p>Implement our selections safely in just one click</p>
              </List>
            </ListContainer>
            <button className="heroBtn" onClick={handleModal}>Join Waitlist</button>
          </HeroContent>
          <ScrollAnimation duration={1.5} animateIn="fadeInUp">
            <HeroImage>
              <Image
                src={LandingImage}
                alt='Hero landing image'
                width='400'
                height='700'
              />
            </HeroImage>
          </ScrollAnimation>
        </Flex>
      </Container>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  margin-top: 4rem;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
  }
`

const FormContainer = styled.div`
  margin-top: 5rem;
`
const FormControl = styled.div`
  margin-bottom: 1rem;
  text-align: left;

  span {
    color: red;
  }
`
const Input = styled.input`
  padding: 15px;
  width: 100%;
  border-radius: 6px;
  border: solid 1px #ccc;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 1.3rem;
  color: #333;

  &::placeholder {
    font-size: 1.3rem;
    color: #cccc;
  }
`

const ListContainer = styled.div`
  margin: 2rem 0;
`

const List = styled.div`
  display: flex;
  align-items: center;
  color: #112838;
  margin-bottom: 1.3rem;

  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
    margin-top: 0;
    font-size: 1.1rem;
    line-height: 150.5%;
  }

  .check {
      font-size: 1.5rem;
    }

  @media (max-width: 768px) {
    .check {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`

const HeroContent = styled.div`
  width: 55%;
  p {
    font-size: 1rem;
    font-weight: 500;
  }

  .heroBtn {
    margin-top: 2rem;
    height: 75px;
    width: 50%;
    border-radius: 45px;
    background: #112838;
    color: #ffff;
    border: none;
    padding: 15px;
    font-weight: 600;
    font-size: 1.1rem;
    font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 5rem;
  }
`

const HeroImage = styled.div`
  margin-top: 6rem;
  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`

const ModalBody = styled.div`
  text-align: center;
  padding-bottom: 2rem;

  h2 {
    font-size: 1.3rem;
    color: #112838;
    font-weight: 600;
    margin-bottom: 2rem;
  }

  button {
    width: 80%;
    margin: 1.5rem 0;
  }

  .small {
    font-weight: 500;
    margin: 1.5rem 0;

    a {
      font-weight: 700;
      color: #112838;
    }
  }

  .shareIcon {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 1rem;

    .icon {
      background: #112838;
      color: #fff;
      padding: 7px;
      font-size: 1.1rem;
      border-radius: 6px;
    }
  }
`

const HeroHeading = styled.div`
  font-weight: 700;
  font-size: 3rem;
  color: #112838;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export default HeroSection
