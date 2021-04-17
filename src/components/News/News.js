import React from 'react';
import { Card , Button} from 'react-bootstrap';


const News = (props) => {
  //const {title} = props.article;
  return (
       <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Title>{props.article}</Card.Title>
        <Card.Text>
          {/* {props.description} */}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default News;