import { Avatar, AvatarImage,AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return ( 
        <div >
            <Card className="border-gray-200">
                <CardContent className=" flex py-2 justify-between">
                    <div className=" flex flex-col gap-2 py-2">
                        <Badge className="w-fit bg-indigo-400  text-white hover:bg-indigo-100 hover:text-black" variant='outline'>Confirmado</Badge>
                        <h2 className=" font-bold">Corte Cabelo</h2>
                        <div className="flex items-center gap-2">                           
                        <Avatar className=" h-6 w-6">
                            <AvatarImage  src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" alt="" />
                            <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <h3 className=" text-sm text-black">Vintage Barber</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center border border-solid p-2">
                    <p className="text-sm">Fevereiro</p>
                    <p className="flex text-2xl">06</p>
                    <p className="flex text-sm">08:45</p>
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default BookingItem;