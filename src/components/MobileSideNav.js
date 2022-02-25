import styled from 'styled-components'
import { useState } from "react"
import Link from 'next/link'
import { MdClose } from "react-icons/md"

const MobileSideNav = ({show, onClose }) => {
    const [ closeNav, setCloseNav ] = useState(false)

    const handleClose = () => {
        onClose()
    }

    return (
        show ? (<SideNav>
            <AsideNav>
                <Link href="/">
                <a>Games</a>
                </Link>
                <Link href="/">
                <a>About</a>
                </Link>
                <Link href="/">
                <a>FAQs</a>
                </Link>
                <Link href="/">
                <a className="navBtn">Community</a>
                </Link>
            </AsideNav>
            <MdClose className="close" onClick={handleClose} />
        </SideNav>) : null
    )
}


const SideNav = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: #33333391;
    width: 100%;
    height: 100%;
    z-index: 9;

    .close {
        color: #333;
        position: absolute;
        top: 2rem;
        right: 2.5rem;
        font-size: 2rem;
        background: #fff;
        border-radius: 6px;
    }
`;

const AsideNav = styled.nav`
    background: #fff;
    height: 100%;
    width: 70%;
    padding: 2rem;

    a {
        display: block;
        line-height: 4;
        font-size: 1.1rem;
    }
`;


export default MobileSideNav