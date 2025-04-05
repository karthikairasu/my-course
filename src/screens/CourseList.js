import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CourseCard from './CourseCard';
import { useEffect, useState } from 'react';

function CourseList() {
    const [list, setList] = useState();

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setList(data))

    }, []);

    if(list == null){
        return <div>Loading...</div>
    }

  return (
    <Container className="py-4">
      <Row>
        {list.map((course, index) => (
          <Col key={index} md={4} sm={6} className="mb-4">
            <CourseCard course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CourseList;
