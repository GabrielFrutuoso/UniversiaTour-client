import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import { IoTrashOutline } from "react-icons/io5"
import { MdOutlineEdit } from "react-icons/md"

const ActivityCard = () => {
  return (
    <Card shadow={false} className="border-2 border-gray-100 shadow-sm">
        <CardHeader shadow={false} floated={false} className="p-0">
            <Typography variant="h5" color="blue-gray">
                Cristo Redentor
            </Typography>
            <Typography color="gray" className="font-normal">
                Rio de Janeiro
            </Typography>
        </CardHeader>
        <CardBody className="text-left p-0 px-3">
            <Typography variant="small" color="gray" className="h-24">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
        </CardBody>
        <CardFooter className="flex justify-center pt-0 pb-1">
            <div className="flex">
                <Button variant="text" color="blue" className="w-full gap-1 flex justify-center">
                    <MdOutlineEdit size={15} />
                    editar
                </Button>
                <Button variant="text" color="red" className="w-full gap-1 flex justify-center">
                    <IoTrashOutline size={15} />
                    excluir
                </Button>
            </div>

        </CardFooter>
    </Card>
  )
}

export default ActivityCard