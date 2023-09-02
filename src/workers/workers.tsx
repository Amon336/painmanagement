import { workersData } from "./workersData";
import './workers.scss'
import { Footer } from "../footer/footer";
import { useEffect, useState } from "react";

export function Workers() {
    const TSXworkersData = workersData.map((item, index) => (
        <Worker key={index} name={item.name} services={item.services} profession={item.profession} 
        price={item.price} promotion={item.promotion}
        />
    ))
    return (
        <>
            <main className="workers-grid">
                {TSXworkersData}
            </main>
            <Footer />
        </>
    )
}

interface workerInterface {
    name : string;

    services : string;

    profession : string;

    price? : {first : number, repeat : number}

    promotion? : number
}

function Worker(props : workerInterface) {
    const [price , setPrice] = useState(``)
    useEffect(() => {
        if (props.promotion !== undefined && props.price) {
            setPrice(
                `Консультация первичная - ${props.price.first}, повторная - ${props.price.repeat}, по акции - ${props.promotion}`
            );
        } else if (props.price) {
            setPrice(
                `Консультация первичная - ${props.price.first}, повторная - ${props.price.repeat}`
            );
        } else {
            setPrice("");
        }
    }, [props.promotion, props.price]);
    
    const whatsappURL = `https://wa.me/+77052727775?text=Здравствуйте,%20хочу%20записаться%20к%20врачу%20${encodeURIComponent(props.name)}`
    return (
        <div className="worker">
            <h1>{props.name}</h1>
            <p>{props.services}</p>
            <p>{props.profession}</p>
            <p>{
                price
            }
            </p>
            <a href={whatsappURL} target="_blank" rel="noreferrer">Записаться</a>
        </div>
    )
}