import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import SuccessMessage from './SuccessMessage'

export const Form = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [state, handleSubmit] = useForm('mleqgjjj')
  if (state.succeeded) {
    return (
      <div>
        <SuccessMessage />
      </div>
    )
  }

  return (
    <div className="my-[64px] lg:my-0">
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              value={data.subject}
              onChange={(e) => setData({ ...data, subject: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>

            <textarea id="message" name="message" rows="5" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="px-10 py-3 bg-[#D3E97A] font-Manrope font-bold rounded-full max-w-[140px]"
            disabled={state.submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
