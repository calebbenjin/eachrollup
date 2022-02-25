import Link from 'next/link'
import { useState } from 'react'
import styled from 'styled-components'
import { GoThreeBars } from "react-icons/go"
import Container from './Container'
import Image from "next/image"
import Logo from '@/public/logo.png'
import MobileSideNav from './MobileSideNav'
import Modal from './Modal'
import coinImg from '@/public/coin.png'
import InputButton from './InputButton'
import Button from './Button'
import {
  BsTwitter,
  BsWhatsapp,
  BsMessenger,
} from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'
import { MdOutlineFileCopy } from 'react-icons/md'


const Nav = () => {
  const [showSideNav, setShowSideNav] = useState(false)
  const [colorChange, setColorchange] = useState(false);
  const [showModal, setShowModal] = useState(false)
  const [gamesShowModal, setGamesShowModal] = useState(false)
  const [copyLink, setCopyLink] = useState(false)


  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };

  const handleCopyLink = () => {
    setCopyLink(!copyLink)
  }

  if(typeof window !== "undefined") {
    window.addEventListener('scroll', changeNavbarColor);
  }

  const handleClose = () => {
    setShowSideNav(false)
  }

  const handleSideNav = () => {
    setShowSideNav(true)
  }

  const handleGamesModal = () => {
    setShowModal(true)
  }

  const handlePlayGames = () => {
    setGamesShowModal(true)
  }


  return (
    <NavBar className={colorChange ? 'navbg' : " "}>
      <Container>
        <Flex>
          <Image alth="logo" src={Logo} width="200" height="100" />
          <Modal show={showModal} onClose={() => setShowModal(false)} >
            <ModalBody>
              <h2>Want to skip the waitlist? </h2>
              <p>Get 50 points by sharing invities and playing weekly games </p>

              <Cards>
                <div className="box rotateLeft">
                  <p>Points Earned</p>
                  <h1>0</h1>
                </div>
                <div className="box">
                  <p>Position</p>
                  <h1>567</h1>
                </div>
                <div className="box rotateRight">
                  <p>Friends Referred</p>
                  <h1>0</h1>
                </div>
              </Cards>
              <FeaturedCoins>
                <h4>Featured Indexes</h4>
                <Grid>
                  <div className="coinBox">
                    <Image src={coinImg} alt="coin-Image" height="50" width="50" />
                    <p>DefiPulse Index</p>
                  </div>
                  <div className="coinBox">
                    <Image src={coinImg} alt="coin-Image" height="50" width="50" />
                    <p>DefiPulse Index</p>
                  </div>
                  <div className="coinBox">
                    <Image src={coinImg} alt="coin-Image" height="50" width="50" />
                    <p>DefiPulse Index</p>
                  </div>
                </Grid>
              </FeaturedCoins>

              <p className="small">Invite friends</p>
              <InputButton type="text" value='https://www.alongside.finance?referral=aYB4hUZ&refSource=copy' onClick={handleCopyLink} icon={ copyLink ? <AiOutlineCheck/> : <MdOutlineFileCopy />} />
              <div className="shareIcon">
                <Link href="/">
                  <a target="_blank" className="icon"><BsTwitter /></a>
                </Link>
                <Link href="/">
                  <a target="_blank" className="icon"><BsWhatsapp /></a>
                </Link>
                <Link href="/">
                  <a target="_blank" className="icon"><BsMessenger /></a>
                </Link>
              </div>
              <button className="gamesBtn" onClick={handlePlayGames}>Play Games</button>
            </ModalBody>
          </Modal>

          <Modal show={gamesShowModal} onClose={() => setGamesShowModal(false)}>
            <ModalBody>
              <h2>Weekly games</h2>
              <p>Earn points to skip the waitlist by playing weekly games</p>

              <div className="board">
                <h1>Can you tell Dogecoin from Bitcoin?</h1>
              </div>

              <button className="gamesBtn" onClick={handlePlayGames}>Start</button>
            </ModalBody>
          </Modal>
          <NavList>
            <Link href="/">
              <a onClick={handlePlayGames}>Games</a>
            </Link>
            <Link href="/">
              <a>About</a>
            </Link>
            <Link href="/">
              <a>FAQs</a>
            </Link>
            <Link href="/#hashid" scroll={false}>
              <a className={colorChange ? 'navBtnDark' : "navBtn"}>Community</a>
            </Link>
          </NavList>
          <GoThreeBars className="toggle" onClick={handleSideNav} />
          <MobileSideNav show={showSideNav} onClose={handleClose} />
        </Flex>
      </Container>
    </NavBar>
  )
}

const NavBar = styled.nav`
  padding: 0;
  z-index: 1;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  transition: 0.8s all ease;
`

const NavList = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1rem;

  a {
    margin-left: 3rem;
    font-weight: 600;
    color: #112838;
  }

  .navBtn {
    background: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    transition: 0.8s all ease;
  }

  .navBtnDark {
    background: #112838;
    color: #fff;
    padding: 10px 20px;
    transition: 0.8s all ease;
    border-radius: 30px;
  }

  @media(max-width: 768px) {
    display: none;
    a {
      margin-left: 0.8rem;
      font-size: 0.7rem;
    }
    .navBtn {
      background: #fff;
      padding: 10px;
      border-radius: 30px;
    }
  }

  @media(max-width: 900px) {
    width: 60%;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle {
    font-size: 2rem;
    display: none;
  }

  @media(max-width: 768px) {

    .toggle {
      font-size: 2rem;
      display: block;
    }
  }
`;

const ModalBody = styled.div`
  text-align: center;

  h2 {
    font-size: 1.3rem;
    color: #112838;
    font-weight: 600;
  }

  p {
    font-size: 1.2rem;
    color: #112838;
  }

  .board {
    background: #FFDA47;
    padding: 3rem;
    border-radius: 10px;
    margin: 2rem 0;
    color: #112838;
    Line-height: 1.5;
    ${'' /* Line-height: 72px; */}
  }

  .small {
    font-weight: 600;
    font-size: 0.9rem;
    color: #84855D;
    text-align: left;
    margin: 0;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;

    a {
      font-weight: 700;
    }
  }

  .gamesBtn {
    margin-top: 1rem;
    font-family: 'Poppins', sans-serif;
    background: #112838;
    color: #ffff;
    border: none;
    padding: 18px;
    width: 60%;
    font-weight: 600;
    font-size: 1.1rem;
    border-radius: 30px;
  }

  .shareIcon {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 1rem auto 2rem auto;

    .icon {
      background: #84855D;
      color: #fff;
      width: 60px;
      padding: 10px;
      font-size: 1.1rem;
      border-radius: 6px;
    }
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 3rem 0;

  .box {
    padding: 5px 5px;
    border-radius: 6px;
    background: #0A3A85;
    color: #fff;
    height: 127px;

    h1 {
      margin-top: 2.5rem;
    }

    p {
      color: #fff;
      font-size: 0.7rem;
    }
  }

  .rotateLeft {
    transform: rotate(-15deg);
    margin-top: 1rem;
  }
  .rotateRight {
    transform: rotate(15deg);
    margin-top: 1rem;
  }
`;

const FeaturedCoins = styled.div`
  h4 {
    text-align: left;
    color: #112838;
    font-weight: 600;
    margin-top: 3rem;
    margin-bottom: 10px;
  }
  .coinBox {
    padding: 15px 0px;
    border-radius: 10px;
    ${'' /* box-shadow: 1px 2px 9px rgba(0,0,0,0.1); */}
    border: solid 1px #ccc;

    p {
      font-size: 0.7rem;
      margin: 0;
      color: #E370DE;
      margin-top: 0.5rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

export default Nav
