import './ClientsReview.css';

const reviews = [
  {
    name: 'Rohit Bedwal',
    feedback: 'Working with Akash Rajput has been a fantastic experience. The website they created for us is exactly what we needed to support students aspiring to careers in aviation. The design is intuitive, and the functionality is flawless. We now have a platform where students can easily access our monthly magazine, study materials, and blog posts. Highly recommend their services!',
    company: 'Futurepilotsclub.com'
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
            <p className="client-name">{review.name}, <a href='https://www.futurepilotsclub.com' >{review.company}</a></p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientsReview;
