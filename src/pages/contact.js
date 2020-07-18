import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
        <Head title="Contact" />
            <h1>Contact me</h1>
                <p><a href="https://t.me/rkhrv" target="_blank" rel="noopener noreferrer">Telegram</a></p>
                <p><a href = "mailto: arkharovp@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></p>
                <p><a href="https://api.whatsapp.com/send?phone=+358414748176" target="_blank" rel="noopener noreferrer">WhatsApp</a></p>
                <p><a href="https://www.facebook.com/pasha.rharov" target="_blank" rel="noopener noreferrer">facebook</a></p>
        </Layout>
    )
}

export default ContactPage