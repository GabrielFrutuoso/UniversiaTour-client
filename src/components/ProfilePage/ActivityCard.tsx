import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import { IoTrashOutline } from "react-icons/io5"
import { MdOutlineEdit } from "react-icons/md"
import { api } from "../../api/UniversiaApi"
import { useQuery } from "@tanstack/react-query"

const ActivityCard = ({ id }: { id: number}) => {

    const { data } = useQuery({
        queryKey: [`activities-${id}`],
        queryFn: () => api.get(`/activities/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${JSON.parse(localStorage.getItem("@Auth:token") as string)}`
            }
        }),
        refetchOnWindowFocus: true
    })


    const handleDelete = ({activityId}: {activityId: number}) => {
        api.delete(`/activities/${activityId}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("@Auth:token") as string)}`
            }
        })

        window.location.reload()
    }

  return (
    <Card placeholder={"activity card"} shadow={false} className="border-2 border-gray-100 shadow-sm">
        <CardHeader placeholder={"card header"} shadow={false} floated={false} className="p-0">
            <Typography placeholder={"activity title"} variant="h5" color="blue-gray">
                {data?.data?.touristic.location}
            </Typography>
            <Typography placeholder={"activity title"} variant="h6" className="text-gray-700">
                {data?.data?.touristic.city}
            </Typography>
        </CardHeader>
        <CardBody placeholder={"card body"} className="text-left p-0 px-3">
            <Typography placeholder={"activity description"} variant="small" color="gray" className="h-24">
                {data?.data?.description}
            </Typography>
        </CardBody>
        <CardFooter placeholder={"card footer"} className="flex justify-center pt-0 pb-1">
            <div className="flex">
                <Button placeholder={"edit"} variant="text" color="blue" className="w-full gap-1 flex justify-center">
                    <MdOutlineEdit size={15} />
                    editar
                </Button>
                <Button placeholder={"delete"} variant="text" color="red" className="w-full gap-1 flex justify-center" onClick={() => handleDelete({activityId: data?.data?.id})}>
                    <IoTrashOutline size={15} />
                    excluir
                </Button>
            </div>
        </CardFooter>
    </Card>
  )
}

export default ActivityCard