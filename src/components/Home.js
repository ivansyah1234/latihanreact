import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import '../Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToPerkara = () => {
    navigate('/perkara');
  };
  const goToPenyelesaian = () => {
    navigate('/penyelesaian');
  };
  const goToRekapitulasi = () => {
    navigate('/rekapitulasi');
  };

  return (
    <div className="home-container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '200px' }}>
          <Sidebar goToPerkara={goToPerkara}  goToPenyelesaian={goToPenyelesaian} goToRekapitulasi={goToRekapitulasi}/>
        </div>
        <div style={{ width: '100%', padding: '10px', border: '1px solid',  }}>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Home;


// import React, { useState } from 'react';
// import '../ContactForm.css';

// const ContactForm = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleUsernameChange = (e) => {
//         setUsername(e.target.value);
//     };

//     const handleEmailChange = (e) => {
//         setEmail(e.target.value);
//     };

//     const handleMessageChange = (e) => {
//         setMessage(e.target.value);
//     };

//     return (
//         <div className="login-container">
//             <h2>Contact Form</h2>
//             <form>
//                 <div className="input-group">
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={handleUsernameChange}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={email}
//                         onChange={handleEmailChange}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="message">Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={message}
//                         onChange={handleMessageChange}
//                         required
//                     />
//                 </div>
//                 <button type="button">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;
// import React, { useState } from 'react';
// import '../ContactForm.css';
// // import { useNavigate } from 'react-router-dom';


// const ContactForm = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     // const navigate = useNavigate();
   


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Tambahkan logika untuk menangani login di sini
//         console.log('Username:', username);
//         console.log('Email:', email);
//         console.log('Message:', message);

//         // navigate('/ContactForm');


        
//     };

//     return (
//         <div className="login-container">
//             <h2>ContactForm</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className="input-group">
//                     <label htmlFor="username">Username:</label>
//                     <input
//                         type="text"
//                         id="username"
//                         name="username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label htmlFor="message">Message:</label>
//                     <input
//                         type="message"
//                         id="message"
//                         name="message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;