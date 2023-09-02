import './home.scss'
import mainLogo from '../img/Frame 78 1.svg'
import backPain from '../img/Frame 66.svg'
import doctor from '../img/Frame 67.svg'
import one from '../img/iconOne1.png'
import careerIcon from '../img/careerIcon1.png'
import handShake from '../img/hands.png'
import { Footer } from '../footer/footer'

export function Home() {
    return (
        <>
          <main>
                <section className='about-us'>
                    <div>
                        <h1>Pain management</h1>
                        <p>Центр лечения боли и хирургии позвоночника<span> Pain Management</span> был основан в 2018 году и 
                            специализируется на лечении пациентов с острой и хронической болью в позвоночнике и крупных 
                            суставах. За время работы нашими специалистами пролечено более 10 тысяч пациентов.</p>
                    </div>
                    <img src={mainLogo} alt="" className='main-logo'/>
                </section>
                <section className='about-us'>
                    <div>
                        <h2>Жизнь без боли - возможна!</h2>
                        <p>
                            Мы помогаем пациентам даже с самыми сильными и упорными болями, сопровождающими многие заболевания. 
                            На достижение этой цели направлены усилия врачебного коллектива клиники - квалифицированных и опытных 
                            неврологов, вертеброневрологов, нейрохирургов, анестезиологов и других специалистов. Для этого 
                            применяются лучшие в мире современные, эффективные и безопасные методики лечения болевого синдрома. 
                            И, наконец, этой цели служит весь мощный арсенал диагностического и лечебного оборудования экспертного 
                            класса, которым располагает наша клиника.
                        </p>
                    </div>
                    <img src={backPain} alt="" />
                </section>
                <section className='about-us not-mobile-flex'>
                    <div>
                        <h2>В кратчайшие сроки</h2>
                        <p>
                            Мы считаем, что лечение боли должно занимать минимум времени при максимальной эффективности. 
                            Девиз наших специалистов - помочь пациентам избавиться от болевого синдрома в короткие сроки, 
                            благодаря чему они могут вернуться к нормальной жизни и проводить дальнейшие обследования и лечение 
                            в комфортных условиях.
                        </p>
                    </div>
                    <img src={doctor} alt="" />
                </section>
                <div className='waves'>
                    <div className='wave'>
                        <div>
                            <img src={one} alt="" />
                            <p>#1 клиника в Алматы с большой командой опытных нейрохирургов</p>
                        </div>
                        <div>
                            <img src={careerIcon} alt="" />
                            <p>Более 5 лет успешной работы    с пациентами, страдающими болевыми синдромами позвоночника и крупных суставов</p>
                        </div>
                        <div>
                            <img src={handShake} alt="" />
                            <p>Около 5000 пациентов в год получают нашу помощь в выздоровлении</p>
                        </div>
                    </div>
                    <div className='wave-bg'></div>
                    <div className='wave-bg-2'></div>
                </div>
                <Footer />
          </main>
        </>
    )
}