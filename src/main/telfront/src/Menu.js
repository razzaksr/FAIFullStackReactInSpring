import { Navbar,Nav,Container } from "react-bootstrap"

export const Menu=()=>{
    return(
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/view">FAI Stack</Navbar.Brand>
                    <Navbar.Toggle aria-controls="fai" />
                    <Navbar.Collapse id="fai">
                        <Nav className="ms-auto">
                            <Nav.Link href="/#/view">Home</Nav.Link>
                            <Nav.Link href="/#/fresh">New</Nav.Link>
                            <Nav.Link href="/#/modify">Update</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}