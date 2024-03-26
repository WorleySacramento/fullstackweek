'use client'

import { Button } from "@/app/_components/ui/button";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MenuIcon, MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
   barbershop: Barbershop
}


const BarbershopsInfo = ({barbershop}:BarbershopInfoProps) => {
    const router = useRouter()
    const handleClickBack = () => {
        router.replace('/')
    }
    return ( 
        <div >

        <div className="flex  h-[250px] w-full relative">
            <Button onClick={handleClickBack} size='icon' variant='outline' className=" absolute z-50 top-4 left-3 bg-white">
                <ChevronLeftIcon />
            </Button>

            <Button size='icon' variant='outline' className=" absolute z-50 top-4 right-3 bg-white">
                <MenuIcon />        </Button>
            <Image
                src={barbershop.imageUrl}
                fill
                alt=""
                style={{
                    objectFit: 'cover',

                }}
                className=" opacity-85"
            />
        </div>

        <div className="px-5 pt-3 pb-4 border-b border-solid border-neutral-600">
            <h1 className="flex text-xl font-bold ">{barbershop.name}</h1>
            <div className="flex items-center gap-2">
                <MapPinIcon className=" fill-sky-700 stroke-neutral-600" size={18} />
                <p className="flex text-sm">{barbershop.address}</p>
            </div>
            <div className="flex items-center gap-2 mt-1">
                <StarIcon className=" fill-amber-400 stroke-amber-400" size={18} />
                <p className="flex text-sm">4,8 (600 avaliações)</p>
            </div>
        </div>

        <div className="flex">

        </div>

    </div>
     );
}
 
export default BarbershopsInfo;