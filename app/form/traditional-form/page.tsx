'use client'
import {useState} from 'react'

const TraditionalForm = () => {

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const [confirmPassword, setConfirmPassword] = useState('') 
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    if (password !== confirmPassword) {
      setErrors(["Password and confirm password must match"])
      setIsSubmitting(false)
      return
    }
      
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setErrors([])
  }
  return (
      <div className='w-full h-full p-8 flex flex-col justify-center items-center gap-8'>
        <h1 className='font-bold text-2xl'>React Form without using any library</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 w-[360px]'>
        <ul className=''>
          {errors.length > 0 && 
            errors.map(error => (<li key={error} className='bg-red-100 text-red-500 p-2 rounded-md'>{error}</li>))
          }
        </ul>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      name="email"
                      value={email}
                      required
                      className='border rounded-md text-black/90 py-2 outline-sky-600 outline-offset-4'
                      onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      name="password"
                      value={password}
                      required
                      className='border rounded-md text-black/90 py-2 outline-sky-600 outline-offset-4'
                      onChange={e => setPassword(e.target.value)} />
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                      type="password"
                      name="econfirmPasswordmail"
                      value={confirmPassword}
                      required
                      className='border rounded-md text-black/90 py-2 outline-sky-600 outline-offset-4'
                      onChange={e => setConfirmPassword(e.target.value)} />
            </div>
            
            
            
              <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-sky-600 rounded-md text-white py-2 cursor-pointer disabled:bg-gray-500'>
                  Submit
              </button>
        </form>
    </div>
  )
}

export default TraditionalForm
