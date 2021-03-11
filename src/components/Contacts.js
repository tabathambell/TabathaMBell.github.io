import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {

    const [successMessage, setSuccessMessage] = useState("");
    const { register, handleSubmit, errors } = useForm();

    const serviceID = "service_s962kt4";
    const templateID = "template_ID";
    const userID = "user_R2VstcMrVDspMB8sJvGKv";

    const onSubmit = (data, r) => {
        sendEmail(
          serviceID,
          templateID,
          {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
          },
          userID
        )
        r.target.reset();
      }
    
      const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
          }).catch(err => console.error(`Something went wrong ${err}`));
      }

return (
    <div id="contact" className="contacts">
        <div className="text-center">
            <h1>Contact Me</h1>
            <span className="success-message">{successMessage}</span>
        </div>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* NAME INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  ref={
                    register({
                      required: "What's your name?",
                      maxLength: {
                        value: 50,
                        message: "What's your name?"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* PHONE INPUT */}
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  ref={
                    register({
                      required: "Please add your phone number!",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* EMAIL INPUT */}
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  ref={
                    register({
                      required: "Please provide your email!",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "invalid Email"
                      }
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
             
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  ref={
                    register({
                      required: "You need a subject!",
                    })
                  }
                />
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>
            <div className="col-md-6 col-xs-12">

              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter message here."
                  name="description"
                ></textarea>
                <div className="line"></div>
              </div>
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button btn-main-offer contact-btn className="btn btn-info float-right" type="submit">contact me</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contacts;