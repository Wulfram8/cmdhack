import { useEffect, useState} from "react";
import RestarauntService from "../../API/RestarauntService.ts";
import {RestaurantsList} from "../../components/RestaurantList";
import { Restaurant } from "../../../../dto.ts";

export interface restaurant {
    imgUrl: string,
    title: string,
    tags: string[]
}


const HomePage = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([])
    const fetchData = async () => {
        const data = await RestarauntService.getAll()
        setRestaurants(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <RestaurantsList restaurans={restaurants}/>
        </div>
    );
};

export default HomePage;