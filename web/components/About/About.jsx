import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>About Maps</h1>
        <p className="subtitle">Your trusted companion for navigation and route planning</p>
        
        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              Maps is dedicated to making navigation simple and accessible for everyone. 
              We believe that finding your way from point A to point B should be effortless, 
              accurate, and reliable. Our application combines cutting-edge technology with 
              user-friendly design to help you reach your destination with confidence.
            </p>
          </section>

          <section className="about-section">
            <h2>What We Offer</h2>
            <ul>
              <li>Precise route calculation using longitude and latitude coordinates</li>
              <li>Real-time map visualization of your journey</li>
              <li>Easy-to-use interface for quick navigation</li>
              <li>Accurate distance and direction information</li>
              <li>Support for locations anywhere on Earth</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Why Choose Maps?</h2>
            <p>
              Whether you're planning a road trip, exploring new cities, or simply finding 
              the best route to your destination, Maps provides the tools you need. Our 
              coordinate-based system ensures pinpoint accuracy, while our intuitive 
              interface makes navigation accessible to everyone, from casual users to 
              professional travelers.
            </p>
          </section>

          <section className="about-section">
            <h2>Get Started Today</h2>
            <p>
              Ready to start exploring? Create a free account to save your favorite routes, 
              access your search history, and unlock the full potential of our mapping 
              platform. Join thousands of users who trust Maps for their daily navigation needs.
            </p>
          </section>
        </div>

        <div className="about-footer">
          <p>Have questions? <a href="/contact">Contact us</a> anytime!</p>
        </div>
      </div>
    </div>
  );
}

export default About;