import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from 'axios';



const Details = () => {
  const params = useParams();
  const [imageData, setImageData] = useState({});
  useEffect(() => {
    // Fetch the deatils and save in state
    axios.get(`https://api.unsplash.com/photos/${params.id}?client_id=${process.env.REACT_APP_API_KEY}`)
      .then(response => setImageData(response.data));

  }, [params])
  return (
    <>
      {imageData.id ? (
        <Container fluid style={{ backgroundColor: `${imageData?.color}25` }} className="p-5">
          <Row>
            <Col md={6}>
              <img style={{ maxWidth: "100%", maxHeight: "80vh", borderRadius: "5px" }} src={imageData.urls?.full} alt='popup card' />
            </Col>
            <Col md={6}>
              <h3> Upload By: {imageData?.user?.name} (@{imageData.user?.id}) </h3>
              <h6> {imageData.user?.updated_at}</h6>
              <hr />

              {imageData.description ? (
                <>
                  <h5>Description</h5>
                  <h6>{imageData.description}</h6>
                  <hr />
                </>
              ) : false}
              <br />
              <h6>Width: {imageData.width}</h6>
              <h6>Height: {imageData.height}</h6>
              <br />
              <hr />
              <Button variant="primary" href={imageData?.links?.download} traget="_blank">Downlaod</Button>
            </Col>
          </Row>

        </Container>
      ) : <h4> Loding ... </h4>}

    </>
  )
}

export default Details;

