import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0l5oujq', 'template_fu1g1s9', form.current, 'WjPcXt_HIonLof-9E')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <div>
              <div className="flex flex-col justify-center items-center gap-5 mt-20">
                <p className="text-xs font-thin">Contact</p>
                <h2 className="text-2xl font-semibold mb-10">Request for Quote</h2>
            </div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form ref={form} onSubmit={sendEmail} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="user_email" placeholder="Your Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea textarea-bordered" name='message' placeholder="Message"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"><input type="submit" value="Send" /></button>
          
        </div>
     
    </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;