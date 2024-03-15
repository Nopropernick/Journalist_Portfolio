import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Contact() {
  return (
        <footer className="bg-black text-white py-4">
          <div className="container mx-auto flex flex-wrap justify-center">
            <div className="flex flex-wrap justify-center">
              <a href="#" className="mx-3">Insta</a>
              <a href="#" className="mx-3">Facebook</a>
              <a href="#" className="mx-3">therealarunsingh@gmail.com</a>
              <a href="#" className="mx-3">Twitter</a>
            </div>
            <div className="mt-4 text-center w-full">
              <p>&copy; 2024. All rights reserved.</p>
            </div>
          </div>
        </footer>
      );
    }
    
    export default Contact;