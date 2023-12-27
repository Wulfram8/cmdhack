import {Dispatch, SetStateAction, useEffect, useState} from "react";
import RestarauntService from "../../API/RestarauntService.ts";
import {RestaurantsList} from "../../components/RestaurantList";

export interface restaurant {
    imgUrl: string,
    title: string,
    tags: string[]
}

interface state {
    restar: restaurant,
    setRestar: Dispatch<SetStateAction<restaurant[]>>
}

const HomePage = () => {
    const [restar, setRestar] = useState<state[]>([])
    console.log(restar)
    const fetchData = async () => {
        const data = await RestarauntService.getAll()
        setRestar(data)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div>
            <RestaurantsList restaurans={restar}/>
        </div>
    );
};

export default HomePage;