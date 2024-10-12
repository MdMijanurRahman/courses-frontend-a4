import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from './../assets/logo.jpeg'
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <div>
            {/* About Us Section */}
      <section className="about-us-section mt-10">
        <h2 className="text-2xl font-semibold text-center">About Us</h2>
        <div className="flex justify-center items-center mt-4">
          <img
            src={logo} // Replace with actual image of Md. Mijanur Rahman Howlader
            alt="Mijan Training Institute"
            className="rounded-full w-32 h-32"
          />

          {/* <img src= alt="Logo" className='w-10 h-10 text-center' /> */}
          <div className="ml-4">
            <p className="text-lg font-semibold">Your Chief Mentor: </p>
            <p className="text-lg font-semibold">Md. Mijanur Rahman Howlader</p>
            <p>Upazila ICT Officer, Borhanuddin, Bhola</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-10 bg-gray-800 text-white text-center p-4 flex justify-between">
        <p>Contact: train_it@gmail.com</p>
        <p>Address: 123 Main St, Borhanuddin, Bhola</p>
        <div className="social-links mt-2 flex justify-center space-x-6">
          <a href="https://www.facebook.com/" className="mx-2">
            Facebook &nbsp;
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.x.com" className="mx-2">
            Twitter &nbsp;
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </footer>
        </div>
    );
};

export default Footer;