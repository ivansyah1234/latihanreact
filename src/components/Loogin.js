// function navbar(){
//     return (
//         <div>
//             <ul>
//                 <li><a href="#">Home</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </div>
//     )
// }export default navbar;
import React, { useState, useEffect } from 'react';
import '../Login.css';
import { useNavigate } from 'react-router-dom';


const Loogin = () => {
    const [idpengguna, setIdpengguna] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Menambahkan kelas pada body tag saat komponen dimuat
        document.body.classList.add('login-page');

        // Membersihkan kelas dari body tag saat komponen dibongkar
        return () => {
            document.body.classList.remove('login-page');
        };
    }, []); // Efek ini hanya dijalankan sekali saat komponen dimuat

   


    const handleSubmit = (e) => {
        e.preventDefault();
        // Tambahkan logika untuk menangani login di sini
        console.log('Idpengguna:', idpengguna);
        console.log('Password:', password);
        navigate('/Home');
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        

        <div className="login-container">
            <h2>Sistem Informasi Badan Pemulihan Asset</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="idpengguna">Id Pengguna:</label>
                    <input
                        type="text"
                        id="idpengguna"
                        name="idpengguna"
                        value={idpengguna}
                        onChange={(e) => setIdpengguna(e.target.value)}
                        required
                    />
                </div>
                
                <div className="input-group">
                    {/* <label htmlFor="password">Password:</label> */}
                    <div className="password-container">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span 
                            className="toggle-password"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>
                </div>
                <button type="submit">Masuk</button>
            </form>
        </div>
    );
};

export default Loogin;