import { Button, Typography } from "@material-tailwind/react"
import { Link } from "react-router-dom"

export const ErrorPage = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center flex-col gap-3'>
      <Typography placeholder={"title"} variant="h1" className='flex items-center gap-1' color='black'>OPS...</Typography>
      <Typography placeholder={"title"} variant="h3" className='flex items-center gap-1' color='black'>Parece que algo deu errado {':('}</Typography>

      <Link to={'/'}><Button placeholder={"button"} color='black'>Voltar</Button></Link>
    </div>
  )
}
