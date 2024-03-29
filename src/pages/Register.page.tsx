import { Button, Input, Typography } from '@material-tailwind/react'
import { BsBackpack2Fill } from 'react-icons/bs'
import { api } from '../api/UniversiaApi'
import { useContext, useEffect } from 'react'
import { appContext } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'

export const RegisterPage = () => {

  const { setOpenNav } = useContext(appContext)
  const navigate = useNavigate()

  useEffect(() => {
    setOpenNav(false)
  }, [])

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const user = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      birthday: e.target.birthday.value,
      avatar: `https://i.pravatar.cc/300?u=${e.target.username.value}`,
    }    
    api.post("user", user)
    .then(() => navigate("/login")); 
  }

  
  return (
    <div className="h-[100vh] relative flex justify-center items-center bg-[url('https://images.pexels.com/photos/620337/pexels-photo-620337.jpeg?auto=compress&cs=tinysrgb&w=600')] bg-cover bg-no-repeat bg-fixed after:w-full after:h-full after:bg-black/60 after:top-0 after:left-0 after:absolute after:z-10">
        <form className="w-80 p-4 flex flex-col items-center gap-4 z-40  rounded-md" onSubmit={handleSubmit}>
            <Typography placeholder={"logo"} variant="h3" className='flex items-center gap-1' color='white'>
                <BsBackpack2Fill />
                UniversiaTour
            </Typography>
            <Typography placeholder={"login"} variant="h4" color='white'>Registrar</Typography>
                <Input variant="outlined" label="Nome de usuário" type='text' name='username' placeholder="Nome de usuário" size='lg' crossOrigin={"user"} color='white'/>
                <Input variant="outlined" label="Email" type='email' name='email' placeholder="Email" size='lg' crossOrigin={"user"} color='white'/>
                <Input variant="outlined" label="Senha" type='password' name='password' placeholder="Senha" size='lg' crossOrigin={"user"} color='white'/>
                <Input variant="outlined" label="data de nascimento" type='date' name='birthday' placeholder="data de nascimento" size='lg' crossOrigin={"user"} color='white'/>
                
                <Typography placeholder={'redirect'} variant="small" color='white'>Já possui uma conta? <Link to={'/login'} className='text-blue-500 underline cursor-pointer'>Clique aqui</Link></Typography>
            <Button placeholder={"Entrar"} color='white' fullWidth type='submit'>Entrar</Button>
        </form>
    </div>
  )
}
