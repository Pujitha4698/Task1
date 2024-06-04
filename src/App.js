import React, { useState } from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="content">
      <h1>Welcome to My Website</h1>
      
      <div className="content-section">
        <h2>Furniture</h2>
        <p>We offer a wide range of high-quality furniture for your home. From sofas and chairs to tables and beds, we have everything you need to furnish your space in style.</p>
        <p>Our furniture is crafted with care using the finest materials to ensure durability and comfort. Whether you're looking for modern designs or classic pieces, we have something for every taste and budget.</p>
        <p>Visit our showroom today to explore our collection and find the perfect pieces for your home!</p>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="content">
      <div className="content-section">
        <h2>About Us</h2>
        <p>Our company is dedicated to providing top-quality furniture solutions for homes and businesses. We understand the importance of creating a comfortable and stylish space, which is why we offer a wide range of furniture options to suit every taste and budget.</p>
        <p>From sleek modern designs to timeless classics, our furniture collection is carefully curated to meet the needs of our customers. Whether you're furnishing a new home or updating your existing space, we have the perfect pieces to help you create the environment you desire.</p>
        <p>Visit our showroom today to explore our extensive selection of furniture and discover the perfect pieces for your home or business!</p>
      </div>
    </div>
  );
}


function ServicesPage() {
  return (
    <div className="content">
      <div className="content-section">
        <h2>Our Furniture Services</h2>
        <p>At Our Company, we offer a range of furniture services to ensure that your furniture needs are met with the highest standards of quality and professionalism.</p>
        <p>Our furniture services include:</p>
        <ul>
          <li><strong>Furniture Design:</strong> Our experienced designers work closely with clients to create custom furniture pieces tailored to their specific needs and preferences.</li>
          <li><strong>Furniture Manufacturing:</strong> We have a state-of-the-art manufacturing facility equipped with advanced machinery and skilled craftsmen to produce high-quality furniture items.</li>
          <li><strong>Furniture Installation:</strong> Our team of experts provides professional installation services to ensure that your furniture is properly assembled and installed in your space.</li>
          <li><strong>Furniture Repair and Restoration:</strong> We offer repair and restoration services to revitalize old or damaged furniture, bringing them back to their former glory.</li>
          <li><strong>Furniture Consultation:</strong> Our knowledgeable consultants are available to provide advice and guidance on furniture selection, layout, and styling to help you create the perfect space.</li>
        </ul>
        <p>Whether you're furnishing a new home, renovating your existing space, or looking to enhance the functionality and aesthetics of your furniture, Our Company has the expertise and resources to meet your needs.</p>
      </div>
    </div>
  );
}



function ContactPage() {
  return (
    <div className="content">
      <div className="content-section">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Feel free to reach out to us through any of the following channels:</p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:info@ourcompany.com">info@ourcompany.com</a></li>
          <li><strong>Phone:</strong> +123 456 7890</li>
          <li><strong>Visit Us:</strong> 123 Furniture Street, Cityville, Hyderabad</li>
          <li><strong>Follow Us:</strong> Connect with us on social media for updates, promotions, and design inspiration:
            <ul>
              <li><a href="https://www.facebook.com/ourcompany" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://www.instagram.com/ourcompany" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com/ourcompany" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </li>
        </ul>
        <p>We're here to help you with all your furniture needs. Contact us today!</p>
      </div>
    </div>
  );
}


function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="navbar" id="navbar">
        <a href="#" className="nav-item home" onClick={() => handlePageChange('home')}>Home</a>
        <a href="#" className="nav-item about" onClick={() => handlePageChange('about')}>About</a>
        <a href="#" className="nav-item services" onClick={() => handlePageChange('services')}>Services</a>
        <a href="#" className="nav-item contact" onClick={() => handlePageChange('contact')}>Contact</a>
      </div>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}

export default App;
