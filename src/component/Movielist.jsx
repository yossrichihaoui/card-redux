import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { del } from '../redux/action';


function Movielist() {
const dispatch=useDispatch();
const movies = useSelector((state)=>state.movies);
const edit = () => {
  dispatch(
      edit(movies.id,{
      movies.title:
    })
  );
  handleClose();
};




  return (
    <div style={{display:'flex',justifyContent:"center",gap:"30px",
    flexWrap:"wrap",marginTop:"30px"}}>
        {movies.map((e)=>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.poster} style={{height:"400px"}} />
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
          {e.description}
          </Card.Text>
        <Card.Text>{e.rating}</Card.Text>  
        <Button variant="primary" onClick={()=>dispatch(edit(e.id))}>EDIT</Button>
        <Button variant="primary" onClick={()=>dispatch(del(e.id))}>DELETE</Button>
      </Card.Body>
    </Card>
    )}
    </div>
  )
}

export default Movielist