import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';
import {  FaInstagramSquare } from '@react-icons/all-files/fa/FaInstagramSquare';
import {  FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import {  FaFacebook } from '@react-icons/all-files/fa/FaFacebook';
import {  FaGithub } from '@react-icons/all-files/fa/FaGithub';
import {  FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import {  FaWhatsappSquare } from '@react-icons/all-files/fa/FaWhatsappSquare';

const iconStyle = { color: '#383e42', fontSize: '2.5em' }
const contactStyle = { display: 'inline-block', margin: '0.5em' }
const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact me</h1>
	  <div style = {contactStyle}>
      <p style = {contactStyle}>
        <a href="https://t.me/rkhrv" target="_blank" rel="noopener noreferrer">
         <FaTelegram style={iconStyle} />
        </a>
      </p>
      <p style = {contactStyle}>
        <a
          href="mailto: arkharovp@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope style={iconStyle} />
        </a>
      </p>
      <p style = {contactStyle}>
        <a
          href="https://api.whatsapp.com/send?phone=+358414748176"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaWhatsappSquare style={iconStyle} />
        </a>
      </p>
      <p style = {contactStyle}>
        <a
          href="https://www.facebook.com/pasha.rharov"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaFacebook style={iconStyle} />
        </a>
      </p>
      <p style = {contactStyle}>
        <a
          href="https://github.com/asigaru"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaGithub style={iconStyle} />
        </a>
      </p>
	  <p style = {contactStyle}>
        <a
          href="https://www.linkedin.com/in/pavel-arkharov-4a562140/"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaLinkedin style={iconStyle} />
        </a>
      </p>
	  <p style = {contactStyle}>
        <a
          href="https://www.instagram.com/rkhrv"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FaInstagramSquare style={iconStyle} />
        </a>
      </p>
	  </div>
    </Layout>
  )
}

export default ContactPage
