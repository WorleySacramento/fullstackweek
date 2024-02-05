import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma";
import { ChevronLeft, ChevronLeftIcon, MapPinIcon, MenuIcon, Star, StarIcon } from "lucide-react";
import Image from "next/image";
import BarbershopsInfo from "./_components/barbershopsinfo";
import ServiceItems from "./_components/servicesitems";

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
        include: {
            services: true,
        }
    })

    if (!barbershop) {
        return null
    }

    return (
        <div className="">

            <BarbershopsInfo barbershop={barbershop} />

            <div className="flex flex-col gap-4 py-4">
                {
                    barbershop.services.map(service => (
                        <ServiceItems key={service.id} service={service} />
                    ))
                }
            </div>
        </div>

    );
}

export default BarberDetailsPage;