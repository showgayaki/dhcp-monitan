import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { Button, Container } from 'react-bootstrap'

type HeaderProps = {
    toggleSidebar: () => void;
    toggleSidebarMd: () => void;
}

export default function Header(props: HeaderProps) {
    const { toggleSidebar, toggleSidebarMd } = props

    return (
        <header className="header sticky-top mb-4 py-2 px-sm-2 border-bottom">
            <Container fluid className="header-navbar d-flex align-items-center">
                <Button
                    variant="link"
                    className="header-toggler d-md-none px-md-0 me-md-3 rounded-0 shadow-none"
                    type="button"
                    onClick={toggleSidebar}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <Button
                    variant="link"
                    className="header-toggler d-none d-md-inline-block px-md-0 me-md-3 rounded-0 shadow-none"
                    type="button"
                    onClick={toggleSidebarMd}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>
                <Link href="/" className="header-brand d-md-none">
                    <img className='w-50' src="/assets/brand/monitan--inversion.png" alt="" />
                </Link>
            </Container>
        </header>
    )
}
