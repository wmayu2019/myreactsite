  import './App.css';
  import '..//node_modules/bootstrap/dist/css/bootstrap.min.css';
  import '..//node_modules/bootstrap/dist/js/bootstrap.min.js';
  import {Navbar,Nav,NavbarBrand,NavDropdown,Carousel,CarouselItem,CardColumns,CarouselProps, Container} from 'react-bootstrap';
  import{Row,Image,Col,Button,Card,CardGroup,CardImg} from 'react-bootstrap';
  import {Form,FormControl,FormGroup,FormLabel} from 'react-bootstrap';
  import FacebookIcon from '@material-ui/icons/Facebook';
  import InstagramIcon from '@material-ui/icons/Instagram';
  import LinkedInIcon from '@material-ui/icons/LinkedIn';
  import TwitterIcon from '@material-ui/icons/Twitter';
      function App() {
    return (
      <div className="App">
        
        {/* navbar */}
          <header className="header">
            <Container>
        <Navbar  expand="lg" className="text-light">
    <Navbar.Brand href="#home"> <img src="./image/finallogo.png" width="70%"></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Services">Services</Nav.Link>
        <Nav.Link href="#Project">Project</Nav.Link>
        <Nav.Link href="#Testimonial">Testimonial</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>

        
        {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Affilate Marketing</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">SEO </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Blogging</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Freelancer</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      
    </Navbar.Collapse>
  </Navbar>
  </Container>
  {/*Slider  */}
  {/* <Carousel>
    <Carousel.Item interval={1000}>
      <img
        className="d-block w-100"
        src="https://image.freepik.com/free-vector/digital-marketing-landing-page_33099-1726.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <img
        className="d-block w-100"
        src="https://image.freepik.com/free-photo/marketing-strategy-connting-digital-devices-concept_53876-23053.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 "
        src=" https://image.freepik.com/free-vector/digital-marketing-infographic_52683-9003.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
 */}

 <Container className="first">
   <Row>
     <Col xs={12} md={6}>
     <div className="main-content mt-5">
   <span>Boost Your Website traffic?</span>
      <h1 className="mt-3">Save Your Time & Increase Business With UVO</h1>
      <p>Hiring an SEO expert could well prove to be a shot in the arm for your online business, that deserves a robust web presence.</p>
      <Button  className="butn">Get Started</Button>
   </div>
 
     </Col>
     <Col xs={12} md={6}>
     <Image src=" ./image/back1.png" className="shadow-lg p-3 mb-3 bg-white rounded" width="100%"   roundedCircle />
       
     </Col>
   </Row>
   </Container>
   </header>

  {/* Section1 */}
  <section className="provide" >
  <Container fluid="md" className="ftext">
    <div className="text-center">
      <span >How to Effectively Implement an SEO?</span>
      <h4>Content is Anything That Adds Value To The Reader’s Life</h4>
      </div>

    <Row className="main-content">
      <Col xs={6} md={3}>
        <Card className="card1">
        <Image src="https://uvo.radiantthemes.com/wp-content/uploads/2021/01/agency-Research-icon.png" rounded />

  <Card.Title > <h6>Optimize Your SEO</h6></Card.Title>
        </Card>
      
      
      </Col>
      <Col xs={6} md={3}>
      <Card className="card1">
        <Image src="https://uvo.radiantthemes.com/wp-content/uploads/2021/01/agency-Research-icon.png" rounded />
        <Card.Title >  <h6>Research & Analysis</h6></Card.Title>
        </Card>
      </Col>
      <Col xs={6} md={3}>
        <Card>
        <Image src="https://uvo.radiantthemes.com/wp-content/uploads/2021/01/agency-Lable-icon.png" rounded />
        <Card.Title ><h6>Online Marketing</h6></Card.Title> 
        </Card>
      </Col>
      <Col xs={6} md={3}>
        <Card>
        <Image src="https://uvo.radiantthemes.com/wp-content/uploads/2021/01/agency-marketing-icon.png" rounded />
        <Card.Title > <h6>Grow Business</h6></Card.Title>
        </Card>
      </Col>
      </Row>

  </Container>
  </section>
  {/* Section 2 */}

  <section id="About">
  <Container className="ftext"  >
    <Row className="main-content">
      <Col xs={12} md={6} >

      <div>
      <span >How to Implement an SEO?</span>
      <h1>Exceptional Web Solution for An Online Business Model</h1>
      <p>Hiring an SEO expert could well prove to be a shot in the arm for your online business, that deserves a robust web presence.</p>
      <ul>
        <li>Get Started With a Dynamic Web Optimization</li>
        <li>UVO Content Marketing Service</li>
        <li>Marketing Strategy & SEO Campaigns</li>
        <li>Campaign for Your Niche.</li>
      </ul>
      <Button  className="butn">Get Started</Button>
      </div>
        </Col>
      <Col xs={12} md={6} >
      <Image src=" https://uvo.radiantthemes.com/wp-content/uploads/2020/12/banner-for-digital-marketing.png" className="shadow-lg p-2 mb-2 bg-white rounded" width="100%" height="100%" roundedCircle />
    </Col>
    </Row>
    </Container>
    </section>
  {/* Services */}
  <section >
    <div className="servies">
      <Container fluid >
      <Row  className="sec3">
        <Col xs={12} md={6}>
        <h2> See Our Full-Service Of Digital Marketing</h2>     
        </Col>
        <Col xs={12} md={6}>
          <div style={{borderLeft:"2px solid aqua"}}>
        <p  style= {{marginLeft:"15px"}}>Hiring an SEO expert could well prove to be a shot in the arm for your online business, that deserves a robust web presence. Hiring an SEO expert could well prove 
          to be a shot in the arm for your online business, that deserves a robust and web presence.</p>
          </div>
        </Col>
      </Row>
      </Container>
      <Container className="services " >
        <Row className="main-content ">
          <Col xs={12}  md={3}   className="ml-auto"  >
          <Card >
    <Card.Body>
      <Card.Title className="h6">Social Media Advertising Services</Card.Title>
      <Card.Text >
      We help you social media management and help you grow your business. 
      </Card.Text>
    </Card.Body>
  </Card>
          </Col>
          <Col md={3}  xs={12}  className="ml-auto">
          <Card >
    <Card.Body>
    
      <Card.Title className="h6">Search Engine Optimize Advertising</Card.Title>
      <Card.Text>Social media management and help you grow your  business.
      </Card.Text>
    </Card.Body>
  </Card>
          </Col>
          <Col md={3} xs={12}  className="ml-auto">
          <Card >
      <Card.Body>
      <Card.Title className="h6">We Know About Digital Marketing</Card.Title>
      <Card.Text>
      We help you social media management and help you grow your business.
      </Card.Text>
    </Card.Body>
  </Card>
          </Col>
          <Col md={3}xs={12}  className="ml-auto">
          <Card >
      <Card.Body>
      <Card.Title className="h6">UVO Content Marketing Service</Card.Title>
      <Card.Text>
      We help you social media management and help you grow your business.
      </Card.Text>
    </Card.Body>
  </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </section>
  
  {/* Section 4 */}

  <section>
  <Container className="ftext"  >
    <Row className="main-content">
    <Col xs={12} md={6} >
      <Image src="https://uvo.radiantthemes.com/wp-content/uploads/2020/09/digi-marketing-img3.png" className="shadow-lg p-2 mb-2 bg-white rounded" width="100%" height="100%" roundedCircle />
    </Col>
      <Col xs={12} md={6} >

      <div className="mt-5 pl-3">
      <span >Impress Upon Search Engines</span>
      <h1>Generating ROI Through Value Added SEO Services</h1>
      <p>Hiring an SEO expert could well prove to be a shot in the arm for your online business, that deserves a robust web presence.</p>
      <ul>
        <li>We always solve better Digital Marketing Solution</li>
        <li>Excepteur sint proident culpa qui official</li>
        <li>Leading work Management solution to gain visiblity</li>
      
      </ul>
      
      </div>
        </Col>
      
    </Row>
    </Container>
    </section>
    {/* Section6 */}

    <section id="Services" >
  <Container fluid="md" className="ftext">
    <div className="text-center">
      <span >Services</span>
      <h4 >How We Can Help?</h4>
      <hr style={{backgroundColor:"aqua",width:"10%",height:"1px", textAlign:"center" }} ></hr>
      </div>
      
        <Row className="mt-5"  >
    <Col xs={12} md={4}>
    <Card className="text-center" >
    <Card.Img variant="top" src="./image/ser1.jpg" width="50%" />
      <Card.Body>
      <Card.Title className="h3">Search Engine Optimization</Card.Title>
      <Card.Text>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={12} md={4}>
    <Card className="text-center" >
    <Card.Img variant="top" src="./image/ser2.jpg" width="50%" />
      <Card.Body>
      <Card.Title className="h3">Social Media Strategy</Card.Title>
      <Card.Text>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={12} md={4}>
    <Card className="text-center" >
    <Card.Img variant="top" src="./image/ser6.jpg"  width="50%" />
      <Card.Body>
      <Card.Title className="h3">Real Time and Data</Card.Title>
      <Card.Text>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
        </Row>
        
        <Row className="mt-5" >
    <Col xs={12} md={4}>
    <Card className="text-center" >
    <Card.Img variant="top" src="./image/ser5.jpg" width="50%" />
      <Card.Body>
      <Card.Title className="h3">Online Media Management</Card.Title>
      <Card.Text>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={12} md={4}>
    <Card className="text-center" >
    <Card.Img variant="top" src="./image/ser3.jpg" width="50%" />
      <Card.Body>
      <Card.Title className="h3">Reporting & Analysis</Card.Title>
      <Card.Text>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
    <Col xs={12} md={4}>
    <Card className="text-center" >
    <Card.Img variant="top" src="./image/ser4.jpg" width="50%" />
      <Card.Body>
      <Card.Title className="h3">Penalty Recovery</Card.Title>
      <Card.Text>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </Col>
        </Row>
      </Container>
      </section>
      {/* Section6 */}
      <section id="Project" >
  <Container fluid="md" className="ftext">
    <div className="text-center">
      <span >Projects</span>
      <h4 >Our Projects For Client</h4>
      <hr style={{backgroundColor:"aqua",width:"10%",height:"1px", textAlign:"center" }} ></hr>
      </div>
      <Row className="mt-5">
        <Col xs={12} md={4}>
        <Card className="bg-dark text-white">
    <Card.Img src="./image/p6.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Branding</Card.Title>
      </Card.ImgOverlay>
      </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="bg-dark text-white">
    <Card.Img src="./image/p5.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Marketing</Card.Title>
      </Card.ImgOverlay>
      </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="bg-dark text-white">
    <Card.Img src="./image/p4.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>SEO</Card.Title>
      </Card.ImgOverlay>
      </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col xs={12} md={4}>
        <Card className="bg-dark text-white">
    <Card.Img src="./image/p3.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Web Design</Card.Title>
      </Card.ImgOverlay>
      </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="bg-dark text-white">
    <Card.Img src="./image/p2.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title>Web Developement</Card.Title>
      </Card.ImgOverlay>
      </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="bg-dark text-white">
    <Card.Img src="./image/p1.jpg" alt="Card image" />
    <Card.ImgOverlay>
      <Card.Title> Digital Marketing</Card.Title>
      </Card.ImgOverlay>
      </Card>
        </Col>
      </Row>
  </Container>
  </section>
  {/* Section 7 */}
  <section id="Testimonial" >
  <Container fluid="md" className="ftext">
    <Row>
  <Col xs={12} md={6}>
  <div>
      <span>Testimonial</span>
      <h4 >What Our Client Say</h4>
       <p style={{fontSize:"15px", color:"#7e8086",marginTop:"2rem"}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        Risus commodo viverra maecenas accumsan lacus.
      Lorem is simply dummy text of the printing and typesetting industry.
      </p>
      </div>
  
  </Col>
  <Col xs={12} md={6}>
  <Carousel>
  <Carousel.Item>
   
    <Row>
      <Col xs={6} md={6}>
      <Card className="text-center" >
    <img src="./image/t1.jpg" width="50%" height="50%" style={{borderRadius:"50%",marginLeft:"50px"}} className="shadow-lg p-2 mb-2 bg-primary rounded" />
      <Card.Body>
      <Card.Title className="h3">Mr. Elon Mask</Card.Title>
      <Card.Text>
      <p style={{fontSize:"12px", color:"#7e8086"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
      <Col xs={6} md={6}>
      <Card className="text-center" >
    <img   src="./image/t2.jpg" width="50%" height="50%" style={{borderRadius:"50%" ,marginLeft:"50px"}} className="shadow-lg p-2 mb-2 bg-primary rounded" />
      <Card.Body>
      <Card.Title className="h3">Ms.Edwani</Card.Title>
      <Card.Text>
      <p style={{fontSize:"12px", color:"#7e8086"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
    </Row>
    
  </Carousel.Item>
  <Carousel.Item>
  <Row>
      <Col xs={6} md={6}>
      <Card className="text-center" >
    <img src="./image/t1.jpg" width="50%" height="50%" style={{borderRadius:"50%",marginLeft:"50px"}} className="shadow-lg p-2 mb-2 bg-primary rounded" />
      <Card.Body>
      <Card.Title className="h3">Mr. Elon Mask</Card.Title>
      <Card.Text>
      <p style={{fontSize:"12px", color:"#7e8086"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
      <Col xs={6} md={6}>
      <Card className="text-center" >
    <img   src="./image/t2.jpg" width="50%" height="50%" style={{borderRadius:"50%" ,marginLeft:"50px"}} className="shadow-lg p-2 mb-2 bg-primary rounded" />
      <Card.Body>
      <Card.Title className="h3">Ms.Edwani</Card.Title>
      <Card.Text>
      <p style={{fontSize:"12px", color:"#7e8086"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
    </Row>
    
     </Carousel.Item>
     
     <Carousel.Item>

     <Row>
      <Col xs={6} md={6}>
      <Card className="text-center" >
    <img src="./image/t1.jpg" width="50%" height="50%" style={{borderRadius:"50%",marginLeft:"50px"}} className="shadow-lg p-2 mb-2 bg-primary rounded" />
      <Card.Body>
      <Card.Title className="h3">Mr. Elon Mask</Card.Title>
      <Card.Text>
      <p style={{fontSize:"12px", color:"#7e8086"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
      <Col xs={6} md={6}>
      <Card className="text-center" >
    <img   src="./image/t2.jpg" width="50%" height="50%" style={{borderRadius:"50%" ,marginLeft:"50px"}} className="shadow-lg p-2 mb-2 bg-primary rounded" />
      <Card.Body>
      <Card.Title className="h3">Ms.Edwani</Card.Title>
      <Card.Text>
      <p style={{fontSize:"12px", color:"#7e8086"}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incutu labore et dolore magna aliqua.</p>
      </Card.Text>
    </Card.Body>
  </Card>
      </Col>
    </Row>
  </Carousel.Item>
</Carousel>
  </Col>

    </Row>
      </Container>
      </section>
      {/* Conatct form */}
      <section id="Contact">
  <Container className="ftext"  >
    <Row className="main-content">
    <Col xs={12} md={6} >
      <Image src="./image/contact.jpg" className="shadow-lg p-2 mb-2 bg-white rounded" width="100%" height="100%" roundedCircle />
    </Col>
      <Col xs={12} md={6} >
     <Container>
      <div className="contact">
      <span >Message Me</span>
      <h1>Contact Us</h1>
      <Form className="mt-5">
      <Form.Group controlId="formBasicEmail">
    
    <Form.Label>Name</Form.Label>
    <Form.Control type="text"   />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text"  />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  />
    
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  />
  </Form.Group>
  
  <Button   className="butn" type="submit">
    Submit
  </Button>
</Form>
      
      </div>
      </Container>
        </Col>
      
    </Row>
    </Container>
    </section>
  <footer>
    <Container>

<div className="main-content">
  <Row>
    <Col xs={12} md={3}>
    <h3>Get In Touch</h3>
 
<p style={{fontSize:"14px"}} className="mt-5">Address : PO Box 16122 Collins Street West Victoria 8007 Australia</p>
<h3>Follow Us</h3> 
<ul className="d-flex social-icon mt-2">
  <li><FacebookIcon /></li>
  <li><InstagramIcon/> </li>
  <li><LinkedInIcon/></li>
  <li><TwitterIcon/></li>
</ul>      
    </Col>
    <Col xs={12} md={3}>
    <h3>Important Links</h3>
<ul className="mt-5">
<li>SEO News</li>
<li>Shop</li>
<li>Case Studies</li>
<li>Our Team</li>
</ul>

   </Col>
   <Col xs={12} md={3}>
    <h3>  Our Services</h3>
  <ul className="mt-5">

    <li>SEO Service</li>
    <li>PPC Marketing</li>
    <li>SMO Service</li>
    <li>Digital Marketing</li>
    </ul>
    </Col>
    <Col  xs={12} md={3}>
    <h3> Subscribe Newsletter</h3>
    <div className="mt-5">
   <input type="text" style={{padding:"10px",width:"300px",borderRadius:"5px",borderColor:"none"}}/>
   <Button   className="butn" type="submit">
    Subscribe
  </Button>
  </div>
  </Col>
  </Row>

</div>
    </Container>
  </footer>
      </div>
      
    );
  }

  export default App;
