import MenuIcon from '@mui/icons-material/Menu';
import Logo from "../assets/logo.svg";
import LogoPlain from "../assets/logo-plain.png";
import Hero from "../assets/hero.svg";
import Sustain from "../assets/sustain.svg";
import Ecofriendly from "../assets/ecofriendly.svg";
import High from "../assets/high.svg";
import ArrowBack from "../assets/arrow-back.svg";
import Recycle from "../assets/recycle.svg";
import Leaf from "../assets/leaft-green-two.svg";
import LeafLight from "../assets/leaf-light.svg";
import Lamp from "../assets/light.svg";
import leafBlog from "../assets/leaf.svg";
import ecorouteLogo from "../assets/ecoroute-white.png";
import preview from "../assets/ss-ecoroute.png";
import turbin from "../assets/turbine.svg"
import butterfly from "../assets/butterfly-white.svg"
import { useEffect, useState } from "react";
import { CardReview } from "../components/home/CardReview";
import { ProductCard } from "../components/home/ProductCard";
import { BlogCard } from "../components/home/BlogCard";
import Footer from "../components/footer/Footer";
import { useGetAllBlogs } from '../hooks/useGetAllBlogs';
import { Button } from '@mui/joy';
import { useNavigate } from 'react-router-dom';

const reviewer = [
    {
        photo:"1",
        name:"Kirena Farah Asmaranti",
        job:"Karyawan Operational (Fund) at Mega Kapital Sekuritas",
        review:"Awalnya, saya agak ragu sama aplikasi ini. Saya pikir, apa iya rute yang disarankan bisa benar-benar hemat bahan bakar? Tapi setelah coba beberapa kali, ternyata hasilnya luar biasa! Eco-Route nggak cuma bantu saya ngirit bensin, tapi juga bikin saya lebih sadar soal dampak lingkungan dari perjalanan saya. Sekarang malah jadi aplikasi wajib saya tiap hari."
    },
    {
        photo:"2",
        name:"Wardatul Mila Camelia",
        job:"Guru Sekolah Dasar",
        review:"Aplikasi ini tidak hanya membantu saya dalam kehidupan sehari-hari, tetapi juga menjadi alat pengajaran yang efektif di kelas. Sebagai seorang guru, saya sering memanfaatkan data dari Eco-Route untuk memberikan contoh nyata kepada siswa tentang pentingnya menjaga lingkungan. Fitur kalkulator emisinya sangat edukatif dan mudah digunakan, meskipun saya merasa aplikasi ini akan lebih sempurna jika memiliki mode khusus untuk pelajar atau tambahan konten edukasi yang dapat digunakan di ruang kelas. Namun, secara keseluruhan, ini adalah langkah kecil yang berdampak besar untuk meningkatkan kesadaran generasi muda."
    },
    {
        photo:"3",
        name:"Firly Urifan",
        job:"Staff SDM at PT. Pelindo",
        review:" Awalnya, saya pikir aplikasi ini nggak akan terlalu berguna untuk pekerjaan saya. Rasanya kayak aplikasi biasa yang cuma fokus ke pengguna individu. Tapi ternyata saya salah besar! Eco-Route membantu banget, terutama waktu saya merancang kebijakan perjalanan dinas yang lebih hemat dan ramah lingkungan. Saya juga bisa pakai data dari aplikasi ini untuk mengedukasi karyawan soal dampak lingkungan. Saya berharap,  kedepannya aplikasi ini bisa jadi bagian penting dari inisiatif CSR perusahaan. Skeptis saya berubah jadi keyakinan penuh!"
    },
    {
        photo:"4",
        name:"Muhammad Husein Al Hakim",
        job:"Fullstack Developer at PT Garda Energi Nasional Indonesia",
        review:" Awalnya, saya merasa penasaran, apa benar aplikasi ini bisa menghitung kadar karbon yang dihasilkan kendaraan saya selama perjalanan? Setelah saya coba beberapa kali, ternyata aplikasinya mudah digunakan dan hasilnya akurat. Eco Route nggak cuma bikin saya lebih sadar soal emisi karbon, tapi juga bantu saya mengurangi dampak negatif dari perjalanan sehari-hari. Sekarang, saya jadi lebih bijak memilih rute yang ramah lingkungan. Ini jadi aplikasi andalan saya setiap kali berkendara!"
    },
    {
        photo:"5",
        name:"Syukur Iman Attaqwa",
        job:"Backend Developer at Looyal",
        review:"Aplikasi ini benar bisa menghitung emisi karbon kendaraan saya. Setelah mencobanya, ternyata Eco Route sangat mudah digunakan dan hasilnya akurat. Aplikasi ini tidak hanya membuat saya lebih sadar akan emisi karbon, tetapi juga membantu memilih rute yang lebih ramah lingkungan. Sekarang, Eco Route jadi andalan saya untuk perjalanan sehari-hari!"
    },
    {
        photo:"6",
        name:"Bregsi Atingsari Julastri",
        job:"Backend Developer at Wootix",
        review:"Aplikasi ini membuat saya lebih sadar akan emisi karbon sekaligus membantu saya memilih rute yang lebih ramah lingkungan. Sekarang, Eco Route jadi andalan saya setiap kali bepergian!"
    },
]

export const Home = () => {
    const [active,setActive] = useState(false)
    const {blogs,loading,error,refetch} = useGetAllBlogs()
    const [localBlogs,setLocalBlogs] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        refetch();
        if(blogs.length > 3){
            let newBlogs = blogs.slice(0,3)
            setLocalBlogs(newBlogs)
        }
        }, []);
    
    return (
        <>
            <div className="menu-container">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />

                    <h1 className="logo-title">Green Innovation Indonesia</h1>
                </div>

                <nav className="menu">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#blogs">Blog</a></li>
                        <li><a href="#footer">Contact Us</a></li>
                    </ul>
                </nav>
            
            
                <nav className={(active) ? "sidebar active" : "sidebar"}>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#product">Product</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </nav>

                <MenuIcon className="ham" onClick={()=>{
                    setActive((old)=>{
                        return !old
                    })
                }}></MenuIcon>
                {/* <InputCustom/> */}
            </div>

            <section id="home" className="home">
                <div className="home-container">

                <div className="home-container-text" style={{
                  
                }}>

                <h2 className="home-title">Welcome to Green 
                    Innovation Indonesia
                </h2>
                <br />
                <span className="home-sec-title">
                    We drive sustainability through innovative SaaS solutions in Green Technology.
                </span>

<p className="home-desc">Join us on a journey toward a cleaner and greener future. Every mile
we travel together, every step we take, we can make a difference.</p>

<br />
<button className="home-cta" onClick={
    ()=>{
        window.location.href = "https://wa.me/+6285236944692"
    }
}>Contact Us</button>
                </div>

                <div style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                    <img src={Hero} className="home-hero" alt="" />
                </div>
                </div>
            </section>

            <section id="about">
                <h2 className="page-title">Why Choose Us?</h2>
                <div className="about-1">
                    <div className="about-item">
                        <img src={Sustain} alt="sustain" />
                        <h3>Expert Team</h3>
                        <p>
                            Our team consists of experts and professionals in the tech industry, dedicated to providing top-notch SaaS solutions. We leverage our extensive experience and knowledge to help businesses achieve their goals.
                        </p>
                    </div>
                    <div className="about-item">
                        <img src={Ecofriendly} alt="sustain" />
                        <h3>Innovative SaaS Solutions</h3>
                        <p>
                        Our SaaS solutions are designed to be innovative with cutting-edge features that distruptive the industry. We are committed to providing you with the best tools to help you achieve your goals.
                        </p>
                    </div>
                    <div className="about-item">
                        <img src={High} alt="sustain" />
                        <h3>High-Quality SaaS Solutions</h3>
                        <p>
                        We provide a comprehensive suite of high-quality SaaS solutions designed to meet your needs. Our platforms are scalable, and customizable, ensuring you get the best value for your investment.
                        </p>
                    </div>
                </div>
                <div className="about-2">
                
                <h2 className="page-title">About Us</h2>
                    <img src={LogoPlain} alt="logo" />
                    <p>
                    Green Innovation Indonesia, we are a forward-thinking technology company with a mission to drive sustainability through innovation. Our core expertise lies in providing Software as a Service (SaaS), tailored to meet the growing demand for solutions in Green Technology
                    </p>

                    <p>
                    We believe technology can be a powerful tool for creating a greener future. That's why our focus is on developing cutting-edge SaaS platforms that enable businesses to operate more efficiently, reduce their environmental impact, and embrace sustainable practices.
                    </p>

                </div>

                    
                    <img src={Recycle} alt="" className="recycle" />

                    <img src={Leaf} alt="" className="leaf" />

                    <img src={LeafLight} alt="" className="leafLight" />
                  
                    <img src={Lamp} alt="" className="lamp" />
                
            </section>
            
            <section id="review">
                <h2 className="page-title">Customer Review</h2>

                <div className="review-container">
                    <div className="review-content">
                        {reviewer.map((item,index)=>{
                            return <CardReview key={index} name={item.name} job={item.job} review={item.review} id={item.photo}></CardReview>
                        })}
                    </div>
                </div>
                    {/* <div className="review-nav">
                        <img src={ArrowBack} alt="arrow back" />
                        <img src={ArrowBack} alt="arrow back" />
                    </div> */}
            </section>
            
            
            <section id="product">

                <h2 className="page-title">Products</h2>
                <div className="product-container">
                    {/* <div className="product-nav">
                        <img src={ArrowBack} alt="arrow back" />
                        <img src={ArrowBack} alt="arrow back" />
                    </div> */}
                    <div className="product-content">
                        <ProductCard preview={preview} desc={"Eco-Route is an application that can effectively determine the best travel route by considering time efficiency and the principle of minimal carbon footprint."} logo={ecorouteLogo} ></ProductCard>
                    </div>
                </div>
            </section>
           
            <section id="blogs" className="bg-main">
                <h2 className="page-title white">Blogs</h2>
                <div className="blogs-container">
                    <div className="blogs-content">

                        {blogs.slice(0,3).map((item,index)=>{
                            return <BlogCard key={index} title={item.title} desc={item.description} hero={item.hero_image} url={item.id}></BlogCard>
                        })}

                    </div>
                        <Button onClick={()=>{
                            navigate("/blogs")
                        }}sx={
                            {
                                background:"transparent",
                                color:"white",
                                borderColor:"white",
                                border:"1px solid white",
                                margin:"20px auto",
                                display:"block",
                                "&:hover":{
                                    background:"white",
                                    color:"black"
                                }
                            }
                        }>All Blogs</Button>

                    
                </div>
                <img src={turbin} alt="" className="turbin" />
                <img src={butterfly} alt="" className="butterfly" />
                <img src={leafBlog} alt="" className="leafBlog" />
            </section>

            <section id='footer'>

            <Footer></Footer>
            </section>
        </>
    )
} 