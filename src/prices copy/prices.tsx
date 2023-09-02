import { Link, Routes, Route } from 'react-router-dom'
import { priceList } from './data'
import { secondPriceList } from './secondData'
import iconsBG from '../img/icons.svg'
import './prices.scss'
import { useState } from 'react'
import { Footer } from '../footer/footer'

export function Prices() {
    return (
        <>
            <main className='prices-main'>
                <h1 className='prices-main-h1'>Цены</h1>
                <Routes>
                    <Route path='1' element={<FirstPrice />} />
                    <Route path='2' element={<SecondPrice />} />
                </Routes>
                <div className='prices-links'>
                    <Link to='1'>1</Link>
                    <Link to='2'>2</Link>
                </div>
            </main>
            <Footer />
        </>    
    )
}

function FirstPrice() {
    const TSXpriceList = priceList.map((item, index) => (
        <PriceSection title={item.title} priceList={item.priceList} key={index}/>
    ))
    return (
        <>
            {TSXpriceList}
        </>
    )
}

function SecondPrice() {
    const TSXsecondPriceLists = secondPriceList.map((item, index) => (
        <PriceSection title={item.title} priceList={item.priceList} key={index}/>
    ))

    return (
        <>
            {TSXsecondPriceLists}
        </>
    )
}

interface PriceSectionInterface {
    title : string;

    priceList : Array<{name : string, price : number}>
}

function PriceSection(props : PriceSectionInterface) {

    const [title, setTitle] = useState('')

    const [announcementPos, setAnnouncPos] = useState('150%')

    const priceList = props.priceList.map((item, index) => (
        <button key={index}>
            <li style={{backgroundColor : index % 2 === 0 ? '#E8E8E8' : '#B5B5B5'}} onClick={() => {
                setTitle(item.name)
                setAnnouncPos('50%')
            }}> 
                <p>{item.name}</p>
                <p>{item.price + ' тг'}</p>
            </li>
        </button>
    ))

    const whatsappURL = `
    https://wa.me/+77052727775?text=Здравствуйте,%20хочу%20записаться%20на%20${encodeURIComponent(title)}.%20На%20врача%20${encodeURIComponent(props.title)}`

    return (
        <>
            <section className='price-section'>
                <h1>{props.title}</h1>
                <ul>
                    {priceList}
                </ul>
            </section>
            <div className='announcement' style={{top : announcementPos }}>
                <h1>Вы хотите записаться на {title} ?</h1>
                <div className='announcement-buttons'>
                    <a href={whatsappURL} target='_blank' rel="noreferrer" >Да</a>
                    <button onClick={() => setAnnouncPos('150%')}>Нет</button>
                </div>
                <img src={iconsBG} alt="" />
            </div>
        </>
        
    )
}