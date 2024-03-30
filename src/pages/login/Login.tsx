import { InputLabel, OutlinedInput } from "@mui/material"
import { useForm } from 'react-hook-form'
import { useRegister } from "../../service/mutation/useRegister"
// import { registerData } from "../../types/types"
import { useNavigate } from "react-router-dom"


const Login = () => {
  const { register, handleSubmit } = useForm()
  const { mutate } = useRegister()
  const navigate = useNavigate()

  const submit = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        navigate('/')
      },
      onError: err => console.log(err) 
    })
  }
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="bg-white w-[430px] rounded-xl py-[48px] px-7 shadow-lg">
        <h2 className="text-center mb-9 text-3xl font-semibold">Sign up</h2>
        <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
          <div className='text-black mt-2'>
            <InputLabel htmlFor='name' >Username</InputLabel>
          </div>
          <OutlinedInput
            className="h-[47px]"
            id="name"
            {...register('name')}
          />
          <div className='text-black mt-2'>
            <InputLabel htmlFor='email' >Email</InputLabel>
          </div>
          <OutlinedInput
            className="h-[47px]"
            id="email"
            {...register('email')}
          />
          <div className='text-black mt-2'>
            <InputLabel htmlFor='key' >Password</InputLabel>
          </div>
          <OutlinedInput
            className="h-[47px]"
            id="key"
            {...register('key')}
          />
          <div className='text-black mt-2'>
            <InputLabel htmlFor='secret' >Confirm password</InputLabel>
          </div>
          <OutlinedInput
            className="h-[47px]"
            id="secret"
            {...register('secret')}
          />
          <button className="py-2 bg-secondary text-white rounded-md text-lg mt-9 mb-4">Submit</button>
        </form>
        <p className="text-center text-gray-600">Already signed up? Go to sign in.</p>
      </div>
    </div>
  )
}

export default Login