"use client";
// import useState from 'react';
import AutoComplete from "./components/AutoComplete";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
export default function Home() {

  // const setTitle= useState(n);
  // const titleHolder=(value)=>{
  //   setTitle(value);
  // }

  return (
    <div className="">
      <main >

        <div className="m-3 p-4">
        <Card>
          <Card.Body>
        
              <AutoComplete
               
             />
 
          </Card.Body>
        </Card>
        </div>
        
        <div className="m-3 p-4">
        <Card >
          <Card.Body >

            <div>
              <Form>
              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="ID" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Body</Form.Label>
              <Form.Control type="text" placeholder="Body" />
              </Form.Group>

              <Button variant="primary" type="submit">
              Cadastrar novo registro
              </Button>
              </Form>
              </div>

          </Card.Body>
        </Card>
      </div>             
      </main>

    </div>
  );
}
