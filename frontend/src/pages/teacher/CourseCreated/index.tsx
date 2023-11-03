import React from 'react'
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const CourseCreated = () => {
  return (
    <div className = "mt-5 d-flex justify-content-around">
       <Card style={{ width: '38rem' }} className = "mt-5">
      <Card.Body>
        <Card.Title className = "text-success">New Course has been created successfully.</Card.Title>
        <Link to = "../dashboard"><Button variant="primary">ok</Button></Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default CourseCreated
