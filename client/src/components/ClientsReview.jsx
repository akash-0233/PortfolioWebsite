import './ClientsReview.css';

const reviews = [
  {
    name: 'John Doe',
    feedback: 'Fantastic work! Really impressed with the quality and dedication.',
    company: 'ABC Corp'
  },
  {
    name: 'Jane Smith',
    feedback: 'A pleasure to work with. Highly recommended!',
    company: 'XYZ Ltd'
  },
  {
    name: 'Michael Brown',
    feedback: 'Delivered exactly what we needed. Great job!',
    company: 'Tech Solutions'
  }
];

const ClientsReview = () => {
  return (
    <section className="clients-review">
      <h2>Clients Review</h2>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <p className="feedback">"{review.feedback}"</p>
            <p className="client-name">- {review.name}, {review.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientsReview;
