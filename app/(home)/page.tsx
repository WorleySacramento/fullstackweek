import { format } from 'date-fns'
import Header from "../_components/header";
import { ptBR } from 'date-fns/locale/pt-BR';
import Search from './_components/search';
import BookingItem from '../_components/bokingitem';
import '../globals.css'
import { db } from '../_lib/prisma';
import BarbershopItem from './_components/barbershop-item';


export default async function Home() {

  const barbershops = await db.barbershop.findMany({})
  console.log(barbershops, 'aqui')
  

  return (
    <div className=''>
      <Header />
      <div className=' px-5 pt-5'>
        <h2 className='text-xl font-bold font-sans '>Olá user</h2>
        <p className='capitalize'>{format(new Date(), "EEEE',' dd 'de' MMM 'de' yyyy", {
          locale: ptBR,
        })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="px-5 mt-6">
        <h2 className="text-xs flex uppercase text-gray-500 font-semibold mb-2">Agendamentos</h2>
        <BookingItem/>
      </div>
      <div className="mt-6">
        <h2 className="text-xs flex uppercase text-gray-500 font-semibold mb-2 px-5">Recomendados</h2>
        <div className='flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
          {barbershops.map((barbershop) =>(       
              <BarbershopItem key={barbershop.id}  barbershop={barbershop}/>
          ))
          }
        </div>
      </div>

      <div className="mt-6 mb-16">
        <h2 className="text-xs flex uppercase text-gray-500 font-semibold mb-2 px-5">Populares</h2>
        <div className='flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
          {barbershops.map((barbershop) =>(       
              <BarbershopItem key={barbershop.id}  barbershop={barbershop}/>
          ))
          }
        </div>
      </div>
    </div>
  );
}
