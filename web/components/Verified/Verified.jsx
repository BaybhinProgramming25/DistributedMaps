import { useEffect } from 'react'
import axios from 'axios'

import './Verified.css';

const Verified = () => {

  useEffect(() => {

    console.log('Hello from UseEffect()');

  }, [])



  return (
    <div className="email-verified-container">
      <div className="email-verified-box">
        <h1>Email Verified!</h1>
        <p className="subtitle">Your account is now active and ready to use</p>
        
        <div className="email-verified-content">
          <section className="verified-section">
            <h2>🎉 Success!</h2>
            <p>
              Congratulations! Your email has been successfully verified. You now have 
              full access to all the features Maps has to offer. Your account is secure 
              and ready for you to start exploring.
            </p>
          </section>

          <section className="verified-section">
            <h2>What's Next?</h2>
            <ul>
              <li>Start planning your first route with our powerful mapping tools</li>
              <li>Save your favorite locations for quick access</li>
              <li>Explore personalized route recommendations</li>
              <li>Access your navigation history across all devices</li>
              <li>Join our community of explorers and travelers</li>
            </ul>
          </section>

          <section className="verified-section">
            <h2>Your Account Benefits</h2>
            <p>
              As a verified user, you can now enjoy unlimited route planning, save 
              multiple destinations, and access advanced features like traffic updates 
              and alternative route suggestions. Your journey with Maps starts now!
            </p>
          </section>

          <section className="verified-section">
            <h2>Ready to Explore?</h2>
            <p>
              Head over to the map and start discovering new places. Whether you're 
              planning your daily commute or your next adventure, Maps is here to 
              guide you every step of the way. Let's get started!
            </p>
          </section>
        </div>

        <div className="email-verified-footer">
          <p>Need help getting started? <a href="/contact">Contact us</a> anytime!</p>
        </div>
      </div>
    </div>
  );
}

export default Verified;