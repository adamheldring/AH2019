import React from 'react'
import {
  FaFacebookF,
  FaSpotify,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa'
import './SocialMediaBar.sass'

const SocialMediaBar = () => (
  <div className="social-media__wrapper">
    <a
      href="https://open.spotify.com/artist/4o6OwD3pYXO8phn4erAROF"
      alt="Adam Heldring on Spotify"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaSpotify className="social-media__icon" />
    </a>
    <a
      href="https://www.facebook.com/adamheldring"
      alt="Adam Heldring on Facebook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF className="social-media__icon" />
    </a>
    <a
      href="https://www.instagram.com/adamheldring"
      alt="Adam Heldring on Instagram"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram className="social-media__icon" />
    </a>
    <a
      href="https://www.youtube.com/user/adamheldring"
      alt="Adam Heldring on YouTube"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube className="social-media__icon" />
    </a>
    <a
      href="https://www.twitter.com/adamheldring"
      alt="Adam Heldring on Twitter><FaTwitter"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitter className="social-media__icon" />
    </a>
  </div>
)

export default SocialMediaBar
