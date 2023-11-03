import React from 'react'
import {Button, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'

const DeletedCourse = () => {
  return (
    <div>
      <div className = "mt-5 d-flex justify-content-around">
       <Card style={{ width: '38rem' }} className = "mt-5">
      <Card.Body>
        <Card.Title className = "text-success">This Course has been deleted successfully.</Card.Title>
        <Link to = "../dashboard"><Button variant="primary">ok</Button></Link>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default DeletedCourse
