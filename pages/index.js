import { FaTwitter as FaXTwitter, FaShieldAlt, FaDollarSign, FaGlobe, FaGithubSquare } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Cryptogig</h1>
        <p>Empower Your Freelancing with Blockchain Technology</p>
        <a href="#get-started" className="ctaButton">Get Started</a>
      </header>

      <section className="section features">
        <h2>Why Choose Cryptogig?</h2>
        <ul>
          <li><FaShieldAlt className="icon" /> <strong>Decentralized Control:</strong> No central authority. No restrictions. No interference. Operate freely on the Ethereum blockchain.</li>
          <li><FaDollarSign className="icon" /> <strong>Your Earnings, Your Power:</strong> Zero hidden costs. Every penny you earn is yours to keep.</li>
          <li><FaGlobe className="icon" /> <strong>Global Reach, Local Impact:</strong> Connect with a global audience and expand your freelancing horizons.</li>
        </ul>
      </section>

      <section className="section howItWorks">
        <h2>How It Works</h2>
        <ol>
          <li><strong>Create Your Profile: </strong> Showcase your skills and attract clients.</li>
          <li><strong>Connect & Negotiate: </strong> Engage directly with clients without middlemen.</li>
          <li><strong>Get Paid Instantly: </strong> Enjoy secure and transparent payments on the Ethereum blockchain.</li>
        </ol>
      </section>

      <section className="section faq">
        <h2>FAQ</h2>
        <div className="faqItem">
          <h3>How does Cryptogig ensure security?</h3>
          <div className="faqItemContent">
            <p>Our platform uses Ethereum’s robust security features to protect your transactions and data, ensuring no single point of failure.</p>
          </div>
        </div>
        <div className="faqItem">
          <h3>Are there any hidden fees?</h3>
          <div className="faqItemContent">
            <p>No hidden fees. Cryptogig's decentralized nature means you keep every cent you earn.</p>
          </div>
        </div>
        <div className="faqItem">
          <h3>Can I use Cryptogig anywhere in the world?</h3>
          <div className="faqItemContent">
            <p>Yes! Cryptogig operates globally, allowing you to connect with clients and freelancers from anywhere.</p>
          </div>
        </div>
      </section>

      <section className="section socials">
        <h2>Connect with Us</h2>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="socialLink">
          <FaXTwitter className="icon" size={24} />
          Twitter
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="socialLink">
          <FaGithubSquare className="icon" size={24} />
          Github
        </a>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Cryptogig. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;