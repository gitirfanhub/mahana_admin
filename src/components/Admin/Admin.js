import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form, Col} from "react-bootstrap";
import './Admin.css'

const Admin = (props) => {
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const [validated, setValidated] = useState(false);

	const [masFirstName, setmasFirstName] = useState(false);
	const [masLastName, setmasLastName] = useState(false);
	const [masCity, setmasCity] = useState(false);
	const [masState, setmasState] = useState(false);
	const [masZip, setmasZip] = useState(false);
	const [masImamFirstName, setmasImamFirstName] = useState(false);
	const [masImamLastName, setmasImamLastName] = useState(false);
	const [masMouzanFirstName, setmasMouzanFirstName] = useState(false);
	const [masMouzanLastName, setmasMouzanlastName] = useState(false);
	const [masNumHomes, setmasNumHomes] = useState(false);
	const [masNumPeople, setmasNumPeople] = useState(false);



	const handleSubmit = (event) => {
		const form = event.currentTarget;
			    
		if (form.checkValidity() === false) 
		{
		    event.preventDefault();
		    event.stopPropagation();
		}
		    
		setValidated(true);
	};

	const onFstNmChange = (event) => {
		setmasFirstName(event.target.value);
	}
	const onLstNmChange = (event) => {
		setmasLastName(event.target.value);
	}
	const onCityChange = (event) => {
		setmasCity(event.target.value);
	}
	const onStateChange = (event) => {
		setmasState(event.target.value);
	}
	const onZipChange = (event) => {
		setmasZip(event.target.value);
	}
	const onImamFstNmChange = (event) => {
		setmasImamFirstName(event.target.value);
	}
	const onImamLstNmChange = (event) => {
		setmasImamLastName(event.target.value);
	}
	const onMouzanFstNmChange = (event) => {
		setmasMouzanFirstName(event.target.value);
	}
	const onMouzanLstNmChange = (event) => {
		setmasMouzanlastName(event.target.value);
	}
	const onNumHomesChange = (event) => {
		setmasNumHomes(event.target.value);
	}
	const onNumPeopleChange = (event) => {
		setmasNumPeople(event.target.value);
	}

	const { onRouteChange } = props;

	const onSubmitButton = () => {
		fetch('http://localhost:3000/admin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				masFstNm: masFirstName,
				masLstNm: masLastName,
				masCity: masCity,
				masState: masState,
				masZip: masZip,
				masImamFstNm: masImamFirstName,
				masImamLstNm: masImamLastName,
				masMouzanFstNm: masMouzanFirstName,
				masMouzanLstNm: masMouzanLastName,
				masNumHomes: masNumHomes,
				masNumPeople: masNumPeople
			})
		})
		.then(response => 
			{
				if(response.status !== 200) 
				{
        			console.log('Looks like there was a problem. Status Code: ' +response.status);
        			return;
      			}

				response.json().then(data => 
				{
					console.log(data);
				})
			}
		)

		.then(user => {
			// if (user.id) {
				onRouteChange('admin');
			// }
		})
	}


return(
	<>
	<div className="container-fluid">
		<div className="row" id="myHeader">
			<div className="order col-md-2">
				<img className="imageSize" src={require('../../img/content.png')} alt="content" />
				Contents
			</div>
			<div className="order col-md-4">
				<span className="searchBox">
					<span className="inline">
						<img className="imageSize2" src={require('../../img/search.png')}  alt="search" />
					</span>
					<span className="inline">
						<input className="seacrhFont" type="text" name="search" value="Type Name of Masjid here" />
					</span>
				</span>
			</div>
			<div className="order col-md-6">
				
			</div>
		</div>
		<div className="row boxRow">
			<div className=" row col-md-12 padding_block_two">
				<span className="col-md-2 box box1">
					<Button variant="primary" onClick={handleShow}>
						<img className="imgSzBox" src={require('../../img/masjid1.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid2.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid3.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid4.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid6.jpg')} alt="image4"/>
					</Button>
				</span>
			</div>
			<div className="row col-md-12">
				<span className="col-md-2 box box1">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid7.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid8.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid9.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid5.jpg')} alt="image4"/>
					</Button>
				</span>
				<span className="col-md-2 box">
					<Button variant="primary">
						<img className="imgSzBox" src={require('../../img/masjid1.jpg')} alt="image4"/>
					</Button>
				</span>
			</div>		
		</div>
	</div>		


	<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          	<Modal.Title>
          		Masjid Details
          	</Modal.Title>
        </Modal.Header>
        <Modal.Body>
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<Form.Row>
    			<Form.Group as={Col} md="4" controlId="validationCustom01">
      				<Form.Label>Masjid First name</Form.Label>
      				<Form.Control
			            required
			            type="text"
			            placeholder="First name"
			            defaultValue=""
			            onChange={onFstNmChange}
      				/>
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
    			<Form.Group as={Col} md="4" controlId="validationCustom02">
      				<Form.Label>Masjid Last name</Form.Label>
      				<Form.Control
			            required
			            type="text"
			            placeholder="Last name"
			            defaultValue=""
			            onChange={onLstNmChange}
			        />
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
  			</Form.Row>
  			<Form.Row>
		        <Form.Group as={Col} md="6" controlId="validationCustom03">
		          	<Form.Label>City</Form.Label>
		          	<Form.Control 
						required 
		          		type="text" 
		          		placeholder="City" 
			            onChange={onCityChange}
					/>
		          	<Form.Control.Feedback type="invalid">
		            		Please provide a valid city.
		          	</Form.Control.Feedback>
		        </Form.Group>
		        <Form.Group as={Col} md="3" controlId="validationCustom04">
		          	<Form.Label>State</Form.Label>
		          	<Form.Control 
	          			required 
	          			type="text" 
	          			placeholder="State" 
			            onChange={onStateChange}
		          	/>
		          	<Form.Control.Feedback type="invalid">
		            		Please provide a valid state.
		          	</Form.Control.Feedback>
		        </Form.Group>
		        <Form.Group as={Col} md="3" controlId="validationCustom05">
		          	<Form.Label>Zip</Form.Label>
		          	<Form.Control 
		          		required 
		          		type="text" 
		          		placeholder="Zip" 
			            onChange={onZipChange}
		          	/>
		          	<Form.Control.Feedback type="invalid">
		            		Please provide a valid zip.
		          	</Form.Control.Feedback>
		        </Form.Group>
		    </Form.Row>
		    <Form.Row>
    			<Form.Group as={Col} md="4" controlId="validationCustom01">
      				<Form.Label>Imam First name</Form.Label>
      				<Form.Control
			            required
			            type="text"
			            placeholder="Imam First name"
			            defaultValue=""
			            onChange={onImamFstNmChange}
      				/>
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
    			<Form.Group as={Col} md="4" controlId="validationCustom02">
      				<Form.Label>Imam Last name</Form.Label>
      				<Form.Control
			            required
			            type="text"
			            placeholder="Imam Last name"
			            defaultValue=""
			            onChange={onImamLstNmChange}
			        />
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
  			</Form.Row>
  			<Form.Row>
    			<Form.Group as={Col} md="4" controlId="validationCustom01">
      				<Form.Label>Mouzan First name</Form.Label>
      				<Form.Control
			            required
			            type="text"
			            placeholder="Mouzan First name"
			            defaultValue=""
			            onChange={onMouzanFstNmChange}
      				/>
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
    			<Form.Group as={Col} md="4" controlId="validationCustom02">
      				<Form.Label>Mouzan Last name</Form.Label>
      				<Form.Control
			            required
			            type="text"
			            placeholder="Mouzan Last name"
			            defaultValue=""
			            onChange={onMouzanLstNmChange}
			        />
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
  			</Form.Row>
  			<Form.Row>
    			<Form.Group as={Col} md="4" controlId="validationCustom01">
      				<Form.Label>No of Homes </Form.Label>
      				<Form.Control
			            required
			            type="number"
			            placeholder="No of Homes"
			            defaultValue=""
			            onChange={onNumHomesChange}
      				/>
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
    			<Form.Group as={Col} md="4" controlId="validationCustom02">
      				<Form.Label>No of People </Form.Label>
      				<Form.Control
			            required
			            type="number"
			            placeholder="No of People"
			            defaultValue=""
			            onChange={onNumPeopleChange}
			        />
      				<Form.Control.Feedback>
      					Looks good!
      				</Form.Control.Feedback>
    			</Form.Group>
  			</Form.Row>
  				<Form.Group>
    				<Form.Check
      					required
      					label="Agree to terms and conditions"
      					feedback="You must agree before submitting."
    				/>
  				</Form.Group>
  				<Button type="submit" onClick={onSubmitButton}>
  					Submit form
  				</Button>
		</Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default Admin;