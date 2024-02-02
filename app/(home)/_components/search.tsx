'use client'

import { Button } from "@/app/_components/ui/button";
import { Input } from "@/app/_components/ui/input";
import { MenuIcon, SearchIcon } from "lucide-react";

const Search = () => {
    return ( 
        <div className="flex items-center gap-2">
            <Input placeholder="Pesquise uma Barbearia" />
            <Button variant='outline' size='icon'>
                <SearchIcon size={18}/>
            </Button>
        </div>
     );
}
 
export default Search;