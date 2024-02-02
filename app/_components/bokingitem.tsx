import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
    return ( 
        <div className="booking-item">
            <Card>
                <CardContent>
                    <div>
                        <Badge>Confirmado</Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
 
export default BookingItem;