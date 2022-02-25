import React from 'react'
import styled from 'styled-components'
import cardbanner from '@/public/telegram.png'
import twittercard from '@/public/twitter.png'
import clubhousecard from '@/public/clubhouse.png'
import Image from 'next/image'
import { BsCheckCircleFill } from 'react-icons/bs'
import Container from './Container'
import Link from 'next/link'

const CommunitySection = () => {
  return (
    <Section id="hashid">
      <Container>
        <h2>Join our community</h2>
        <Grid>
          <Card>
            <div className="imageContainer">
              <Image src={cardbanner} alt="cardbanner" width="250" height="130" />
            </div>
            <div className="cardBody">
              <ListContainer>
              <List>
                  <BsCheckCircleFill className='check' />
                  <p>Weekly Programs to.....</p>
                </List>
                <List>
                  <BsCheckCircleFill className='check' />
                  <p>Talk tp specialist.....</p>
                </List>
                <List>
                  <BsCheckCircleFill className='check' />
                  <p>A benefit</p>
                </List>
              </ListContainer>
              <div className="linkBtnContainer">
                <Link href="/"><a className="linkBtn">Join</a></Link>
              </div>
            </div>
          </Card>
          <Card>
            <div className="imageContainer">
              <Image src={clubhousecard} alt="cardbanner" layout="responsive" />
            </div>
            <div className="cardBody">
              <ListContainer>
              <List>
                  <BsCheckCircleFill className='check' />
                  <p>Weekly Programs to.....</p>
                </List>
                <List>
                  <BsCheckCircleFill className='check' />
                  <p>Talk tp specialist.....</p>
                </List>
                <List>
                  <BsCheckCircleFill className='check' />
                  <p>A benefit</p>
                </List>
              </ListContainer>
              <div className="linkBtnContainer">
                <Link href="/"><a className="linkBtn">Join</a></Link>
              </div>
            </div>
          </Card>
          <Card>
            <div className="imageContainer">
              <Image src={twittercard} alt="cardbanner" width="400" height="180" />
            </div>
            <div className="cardBody">
              <ListContainer>
                <List>
                  <BsCheckCircleFill className='check' />
                  <p>Weekly Programs to.....</p>
                </List>
                <List>
                  <BsCheckCircleFill className='check' />
                  <p>Talk tp specialist.....</p>
                </List>
                <List>
                  <BsCheckCircleFill className='check' />
                  <p>A benefit</p>
                </List>
              </ListContainer>
              <div className="linkBtnContainer">
                <Link href="/"><a className="linkBtn">Join</a></Link>
              </div>
            </div>
          </Card>
        </Grid>
      </Container>
    </Section>
  )
}


const Section = styled.div`
  height: 100vh;
  padding-top: 5rem;

  h2 {
    margin-bottom: 2rem;
    text-align: center;
    color: #112838;
    font-weight: 600;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 6rem;
  position: relative;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  border: solid 1px #112838;
  border-radius: 20px;
  width: 350px;
  height: 400px;
  background: #fff;

  &:nth-child(1) {
    margin-right: 19rem;
  }
  
  &:nth-child(2) {
    height: 460px;
    position: absolute;
    border: solid 2px #112838;
    z-index: 1;
    top: -2rem;

    .cardBody {
      .linkBtnContainer {
        margin-top: 5rem;
        text-align: center;

        .linkBtn {
          background: #112838;
          width: 100%;
          color: #fff;
          padding: 15px 60px;
          border-radius: 30px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
        }
      }
    }
  }

  .cardBody {
    padding: 2rem;
    font-size: 1rem;

    .linkBtnContainer {
      margin-top: 3rem;
      text-align: center;

      .linkBtn {
        background: #112838;
        width: 100%;
        color: #fff;
        padding: 15px 60px;
        border-radius: 30px;
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
      }
    }
  }

  .imageContainer {
    height: 130px;

  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 2rem;
    height: 100%;

    &:nth-child(2) {
      height: 460px;
      position: relative;
      z-index: 1;
      top: 0;
    }

    &:nth-child(1) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

const ListContainer = styled.div`
  margin: 2rem 0;
`

const List = styled.div`
  display: flex;
  align-items: center;
  color: #112838;
  margin-bottom: 1rem;

  p {
    margin-left: 0.5rem;
    margin-bottom: 0;
    margin-top: 0;
  }

  .check {
    font-size: 1rem;
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

export default CommunitySection
