import { format } from 'date-fns'
import Header from "../_components/header";
import { ptBR } from 'date-fns/locale/pt-BR';
import Search from './_components/search';
import BookingItem from '../_components/bokingitem';
import '../globals.css'


export default function Home() {
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
        <BookingItem/>
      </div>
    </div>
  );
}
