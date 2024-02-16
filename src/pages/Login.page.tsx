import { Button, Input, Typography } from '@material-tailwind/react'
import { BsBackpack2Fill } from 'react-icons/bs'
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
  const { signIn, findUserByEmail } = useAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    signIn(e.target?.[0].value, e.target?.[1].value)
    findUserByEmail(e.target?.[0].value)
    navigate('/')
  }


  return (
    <div className="h-[100vh] relative flex justify-center items-center bg-[url('https://source.unsplash.com/1200x800/?backpacking')] bg-cover bg-no-repeat bg-fixed after:w-full after:h-full after:bg-black/60 after:top-0 after:left-0 after:absolute after:z-10">
        <form className="w-80 p-4 flex flex-col items-center gap-4 z-40  rounded-md" onSubmit={handleSubmit}>
            <Typography placeholder={"logo"} variant="h3" className='flex items-center gap-1' color='white'>
                <BsBackpack2Fill />
                UniversiaTour
            </Typography>
            <Typography placeholder={"login"} variant="h4" color='white'>Login</Typography>
                <Input variant="outlined" label="E-mail" placeholder="E-mail" size='lg' crossOrigin={"user"} color='white'/>
                <Input variant="outlined" type='password' label="Senha" placeholder="Senha" name='password' size='lg' crossOrigin={"user"} color='white'/>
                <Typography placeholder={'redirect'} variant="small" color='white'>Ainda não possui uma conta? <a className='text-blue-500 underline cursor-pointer'>Clique aqui</a></Typography>
            <Button placeholder={"Entrar"} color='white' fullWidth type='submit'>Entrar</Button>
        </form>
    </div>
  )
}
