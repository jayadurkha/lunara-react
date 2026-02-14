import React, { useState } from "react";

function Contact() {
  const[formdata, setFormdata] = useState({
    name:"",
    email:"",
    message:""
  })

  const [error, setError] = useState({})

  const validate = () =>{
    const newError = {}

    if(!formdata.name) newError.name = "fill name"

    if(!formdata.email) newError.email= "fill email"

    if(!formdata.message) newError.message = "fill message"

    return newError
  }

  const handleChange = (e) =>{
    const{name, value} = e.target

    setFormdata({
      ...formdata,

      [name]:value
    })
  }


 const handleSubmit = (e)=>{
  e.preventDefault()

  let validation= validate()

  if(Object.keys(validation).length === 0){
    console.log(formdata)
    setFormdata({
      name:"",
      email:"",
      message:""
    })
    setError({})
  }

  else{
    setError(validation)
  }
 }
  



  return (
    <div>
      {/* CONTACT HERO */}
      <section className="py-5 text-center contact-hero">
        <div className="container">
          <h2 className="fw-semibold">Get in Touch</h2>
          <p className="text-muted mt-2">
            We love to hear from you. Our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5 align-items-center">

            {/* CONTACT INFO */}
            <div className="col-md-5">
              <h4 className="fw-semibold mb-3">Contact Information</h4>
              <p className="text-muted">
                Reach out to us for product inquiries, custom designs,
                or any assistance regarding your Lunara jewellery.
              </p>

              <p className="mb-1"><strong>Email:</strong> support@lunara.com</p>
              <p className="mb-1"><strong>Phone:</strong> +91 93845 97297</p>
              <p className="mb-1"><strong>Location:</strong> India</p>

              <p className="text-muted mt-4">
                Our team typically responds within 24 hours.
              </p>
            </div>

            {/* CONTACT FORM */}
            <div className="col-md-7">
              <div className="contact-form-box">
                <h5 className="fw-semibold mb-3">Send Us a Message</h5>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder="Enter your name" value={formdata.name} name="name" onChange={handleChange}/>
                    {error.name && <p style={{color:"red"}}>{error.name}</p>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" value={formdata.email} name="email" onChange={handleChange}/>
                    {error.email && <p style={{color:"red"}}>{error.email}</p>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="4" placeholder="Write your message" value={formdata.message} name="message" onChange={handleChange}></textarea>
                    {error.message && <p style={{color:"red"}}>{error.message}</p>}
                  </div>

                  <button
                    
                    className="btn btn-dark px-4 rounded-pill"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BRAND NOTE */}
      <section className="py-5 text-center brand-note">
        <div className="container">
          <p className="text-muted">
            Every Lunara interaction is handled with care, privacy,
            and attention to detail — just like our jewellery.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-white text-center py-4 bg-dark">
        <p>© 2026 Lunara Moonstone Collection</p>
      </footer>
    </div>
  );
}

export default Contact;
