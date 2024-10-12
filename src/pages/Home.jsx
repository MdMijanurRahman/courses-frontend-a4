// import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Banner Section */}
      <section className="banner-section">
        <img
          src="https://via.placeholder.com/1500x500" // Replace with actual image URL
          alt="Banner"
          className="w-full h-auto"
        />
        <h1 className="text-4xl font-bold text-center mt-4">Welcome to Mijan Training Institute</h1>
        <p className="text-center mt-2">Learn from the best courses online</p>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section mt-10">
        <h2 className="text-2xl font-semibold text-center">How It Works</h2>
        <p className="text-center mt-4">
          1. Sign up for an account <br />
          2. Browse available courses <br />
          3. Start learning at your own pace
        </p>
      </section>

      {/* Image Section */}
      <section className="image-section mt-10">
        <h2 className="text-2xl font-semibold text-center">Featured Courses</h2>
        <div className="flex justify-center mt-4">
          <img
            src="https://via.placeholder.com/300" // Placeholder for course image
            alt="Course 1"
            className="w-1/3 mx-2"
          />
          <img
            src="https://via.placeholder.com/300" // Placeholder for course image
            alt="Course 2"
            className="w-1/3 mx-2"
          />
          <img
            src="https://via.placeholder.com/300" // Placeholder for course image
            alt="Course 3"
            className="w-1/3 mx-2"
          />
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section mt-10">
        <h2 className="text-2xl font-semibold text-center">Contact Us</h2>
        <form className="mt-4 flex flex-col items-center">
          <input
            type="text"
            placeholder="Your Name"
            className="border-2 p-2 w-1/2 mb-4"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border-2 p-2 w-1/2 mb-4"
          />
          <textarea
            placeholder="Your Message"
            className="border-2 p-2 w-1/2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-1/2 hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </section>

      {/* About Us Section */}
      <section className="about-us-section mt-10">
        <h2 className="text-2xl font-semibold text-center">About Us</h2>
        <div className="flex justify-center items-center mt-4">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image of Md. Mijanur Rahman Howlader
            alt="Md. Mijanur Rahman Howlader"
            className="rounded-full w-32 h-32"
          />
          <div className="ml-4">
            <p className="text-lg font-semibold">Md. Mijanur Rahman Howlader</p>
            <p>Upazila ICT Officer, Borhanuddin, Bhola</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer mt-10 bg-gray-800 text-white text-center p-4">
        <p>Mijan Training Institute</p>
        <p>Contact: your-email@example.com</p>
        <p>Address: 123 Main St, Borhanuddin, Bhola</p>
        <div className="social-links mt-2">
          <a href="#" className="mx-2">
            Facebook
          </a>
          <a href="#" className="mx-2">
            Twitter
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
