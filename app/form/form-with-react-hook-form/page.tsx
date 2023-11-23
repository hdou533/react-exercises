'use client'


import { useForm, SubmitHandler } from 'react-hook-form'


type Inputs = {
    email: string
    password: string
    confirmPassword: string
}

const FormWithReactHookForm = () => {
    
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 1000))

        reset()
    }
  
  return (
      <div className='w-full h-full p-8 flex flex-col justify-start items-center gap-16'>
        <h1 className='font-bold text-2xl'>React Form with React Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-[360px]'>
        
            <div className='flex flex-col space-y-2'>
                <label htmlFor="email">Email</label>
                  <input
                      type="email"
                      defaultValue={""}
                      {...register("email", {required: "Email is required", maxLength: 50})}
                      className='border rounded-md text-black/90 py-2 outline-sky-600 outline-offset-4'
                  />
                  {errors.email && (<p className=' text-red-500'>{ errors.email.message}</p>)}
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      defaultValue={""}
                      {...register("password", {required: "Password is required", minLength:{value: 8, message: "password must be at least 8 characters"}})}
                      className='border rounded-md text-black/90 py-2 outline-sky-600 outline-offset-4'
                  />
                  {errors.password && (<p className='text-red-500'>{ errors.password.message}</p>)}
            </div>
            <div className='flex flex-col space-y-2'>
                <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                      type="password"
                      defaultValue={""}
                      {...register("confirmPassword", {
                          required: "Confirm password is required",
                          minLength: 8,
                          validate: (value) => value === getValues("password") || "Password must match"
                      })}
                      required
                      className='border rounded-md text-black/90 py-2 outline-sky-600 outline-offset-4'
                  />
                  {errors.confirmPassword && (<p className= 'text-red-500'>{ errors.confirmPassword.message}</p>)}
            </div>
            
            
            
              <button
                  disabled={isSubmitting}
                  type='submit'
                  className='w-full bg-sky-600 rounded-md text-white py-2 cursor-pointer disabled:bg-gray-500'>
                  Submit
              </button>
        </form>
    </div>
  )
}


export default FormWithReactHookForm
