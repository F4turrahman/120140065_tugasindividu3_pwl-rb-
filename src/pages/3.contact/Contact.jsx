import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React from "react";
import './contact.css';

const Contact = () => {
  return (
    <div className="body-div">
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h1>
        </div>
      </header>
      <form>
        <h1>Send Your <span>Question</span></h1>
        <input type="text" name='name' id='' placeholder='Enter name' />
        <input type="email" name='email' id='' placeholder='Example@gmail.com' />
        <textarea name="message" id="" cols="30" rows="10" placeholder='type here....'/>
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Contact