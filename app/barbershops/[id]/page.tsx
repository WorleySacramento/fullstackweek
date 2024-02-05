import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeft, ChevronLeftIcon, MapPinIcon, MenuIcon, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopsInfo from "./barbershopsinfo";

interface BarberDetailsPageProps {
    params: {
        id?: string;
    }
}



const BarberDetailsPage = async ({ params }: BarberDetailsPageProps) => {

    if (!params.id) {
        return null
    }

    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
    })

    if (!barbershop) {
        return null
    }

    return (
        <BarbershopsInfo barbershop={barbershop}/>

    );
}

export default BarberDetailsPage;