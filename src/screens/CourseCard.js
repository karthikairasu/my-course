import Card from 'react-bootstrap/Card';
// import { StarFill } from 'react-bootstrap-icons';

function CourseCard({ course }) {
  return (
    <Card className="course-card shadow-sm border-0">
      <Card.Img variant="top" src='https://picsum.photos/id/8//5000/3333' className="course-image" />
      <Card.Body>
        <Card.Title className="fw-bold text-truncate">{course.title}</Card.Title>
        <Card.Text className="text-muted small">{course.body}</Card.Text>
        <div className="d-flex align-items-center">
        </div>
        <div className="mt-2">
          <span className="fw-bold"></span>
          
        </div>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
