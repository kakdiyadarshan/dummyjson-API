import React, { useState } from 'react';
import './../style/header.css';
import { Container } from 'react-bootstrap';
import { IoCart } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        onSearch(searchTerm);
        console.log(searchTerm);
    };

    return (
        <>
            <header>
                <Container>
                    <div className="nav">
                        <div className="img">
                            <Link to='/'><img
                                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
                                alt=""
                            /></Link>
                        </div>
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <input type="button" onClick={handleSearch} value={"Search"} />
                        </div>
                        <div className="cart">
                            <IoCart />
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
};

export default Header;
