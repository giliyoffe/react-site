import React, { Component } from 'react';
import './Contact.css';
//home contacts menu header sticky-footer about search
class Contacts extends Component {
  render() {
    return (
      <div className="contact-form">
        <form className="form">
          <h3>Contact Form</h3>
          <label className="label">
            First Name
            <input type="text" name="firstname" placeholder="John" required/>
          </label>
          <label className="label">
            Last Name
            <input type="text" name="lastname" placeholder="Doe" required/>
          </label>
          <label className="label">
            Email
            <input type="email" name="email" placeholder="example@example.com" required/>
          </label>
          <label className="label">
            Telephone
            <input type="tel" name="telephone" placeholder="xxx-xxxxxxx"/>
          </label>
          <label className="label">
            Subject
            <input type="text" name="subject" placeholder="My pin number issue" required/>
          </label>
          <label className="label">
            Message
            <textarea name="message" rows="4" cols="50" placeholder="My pin number is not working properly when..." required>
            </textarea>
          </label>
          <select name="feeling">
            <option defaultValue value="">I feel ...</option>
            <option value="happy">Happy</option>
            <option value="ok">Ok</option>
            <option value="not_satisfied">Not Satisfied</option>
          </select>
          <label className="label">
            Agree to the terms and conditions
            <input type="checkbox" name="conditions" value="Agree" required/>
          </label>
          <button>Send</button>
        </form>

      </div>
    );
  }
}

export default Contacts;
