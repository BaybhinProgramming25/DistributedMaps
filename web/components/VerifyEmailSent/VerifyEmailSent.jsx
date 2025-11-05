import './VerifyEmailSent.css';

const EmailSent = () => {

  return (
    <div className="email-sent-container">
      <div className="email-sent-box">
        <h1>Check Your Email!</h1>
        <p className="subtitle">We've sent a verification link to your inbox</p>
        
        <div className="email-sent-content">
          <section className="sent-section">
            <h2>📧 Email Sent Successfully</h2>
            <p>
              We've just sent a verification email to your registered email address. 
              Please check your inbox and click on the verification link to activate 
              your account. This helps us ensure your account is secure and that you 
              have access to all our features.
            </p>
          </section>

          <section className="sent-section">
            <h2>What to Do Next</h2>
            <ul>
              <li>Open your email inbox and look for our verification message</li>
              <li>Click the verification link in the email</li>
              <li>You'll be redirected back to Maps with your account activated</li>
              <li>Start exploring all the features we have to offer</li>
              <li>Save this page - you can request a new link if needed</li>
            </ul>
          </section>

          <section className="sent-section">
            <h2>Didn't Receive the Email?</h2>
            <p>
              If you don't see the email in a few minutes, please check your spam or 
              junk folder. Sometimes verification emails end up there by mistake. 
              Make sure to mark it as "not spam" so you can receive future updates 
              from us without any issues.
            </p>
          </section>

          <section className="sent-section">
            <h2>Need a New Link?</h2>
            <p>
              If the verification link expires or you need us to resend the email, 
              don't worry! Just click the "Resend Verification Email" button below, 
              and we'll send you a fresh link. The link is valid for 24 hours from 
              the time it was sent.
            </p>
          </section>
        </div>

        <div className="email-sent-footer">
          <p>Having trouble? <a href="/contact">Contact support</a> for help!</p>
        </div>
      </div>
    </div>
  );
}

export default EmailSent;