import React from 'react';
import './Home.css';
import img1 from'./assets/Terms&Cond.pdf';
import img2 from'./assets/Privacy&Policy.pdf';
import img3 from'./assets/FAQ.pdf';
import img4 from'./assets/Contact.pdf';
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
      <header>
        <nav>
          <div className="itemss">
          <div className="logo">
            <img src="https://lh5.googleusercontent.com/p/AF1QipPbUAbV0Tw-s2xM-JyblT1s5_Ns7CtEAsDJ_oBZ=w750-h813-p-k-no" alt="Logo" />
          </div>
            <a href="#" >Home</a>
            <a><Link to="/Books">Books</Link></a>
            <a><Link to="/Genres">Genres</Link></a>
            <a><Link to="/Bookmarked">Bookmarked</Link></a>
            <a><Link to="/Payment">Payment</Link></a>
            <a><Link to="/dashboard">Status</Link></a>
            <a><Link to="/Rating">Rating</Link></a>
            <a href="#">Wishlist</a>
          <div className="other">
            <Link to="/">
            <button1>Logout</button1>
            </Link>
          </div>
          </div>
        </nav>
      </header>

      <section>
        <div className="container1">
          <div className="row1">
            <div className="info1">
              <h2 className="hero-heading">What Book are You Looking For</h2>
              <p className="hero-sub-heading">Not Sure What to Read Next? Explore our Catalog</p>
              <div className="users">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80" alt="User" className="img-fluid user" />
                <img src="https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80" alt="User" className="img-fluid user" />
                <img src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80" alt="User" className="img-fluid user" />
                <img src="https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTg0MTM4Nzk&ixlib=rb-1.2.1&q=80" alt="User" className="img-fluid user" />
                <p>4M+ Book Lovers Joined</p>
              </div>
              <button className="Explore Now ">
                Explore Now
              </button>
            </div>  
            <div className="hero-image">
             
            </div>
          </div>
        </div>
      </section>
     <div>
      <h1 className="Books">On Trending Books</h1></div>
      <div class="containerrs">
      <div class="image"> <img src="https://shereads.com/wp-content/uploads/2023/02/secretly-yours-5.jpg" class="imggal"/> </div>
      <div class="image1"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuWmPCRutS7Y9SSMICHB3L4XTSr1HMTEN0Iw&usqp=CAU" class="img1"/></div>
      <div class="image2"> <img src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1941806/41otdhp8e8l-_ac_sy780_.jpg" class="img2"/></div>
      <div class="image3"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyiWPuF0rU71UImj9z_E9ZmkCmq9zLhzrcw&usqp=CAU" class="img3"/></div>
      <div class="image4"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYO2zm6eg0tUUltDAyX4rbm8sa8DW1klcLrQAvQFYrpdkDU8rtdGIQEXCFGFCegESQP8&usqp=CAU" class="img4"/></div>
      <div class="image5"> <img src="https://m.media-amazon.com/images/I/51OoDlblLaL._SL500_.jpg" class="img5"/></div>
      <div class="image6"> <img src="https://www.jagranjosh.com/imported/images/E/Articles/storiezzzzz.jpg" class="img6"/></div>
      <div class="image7"> <img src="https://orion-uploads.openroadmedia.com/md_59e0f5f307ed-must-read-fantasy-books-series-his-majesty-dragon.jpg" class="img7"/></div>
      </div>
    </div>
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
        
            <li><a href={img1} target="_blank">Terms and Conditions</a></li>
            <li><a href={img2} target="_blank">Privacy Policy</a></li>
            <li><a href={img3} target="_blank">FAQ</a></li>
            <li><a href={img4} target="_blank">Contact Info</a></li>
           
          </ul>
     </div>
     </footer>
     </>
  );
};

export default Home;
