import React from 'react';
import HOC from './HOC'
import { Link } from 'react-router-dom';
import { MdOutlineDoubleArrow } from "react-icons/md";

function Eventpage() {
    let eventdata = [
        {
            image: require('../assets/image/Event/eventimage02.jpg')
        },
        {
            image: require('../assets/image/Event/Eventimage01.jpg')
        },
        {
            image: require('../assets/image/Event/eventimage03.jpg')
        },
    ]
    let gausevadata = [
        {
            image: require('../assets/image/gaushala/gauseva04.jpg'),
            path: "/CowEvent01",
            pera: "Promoting a cultural ethos that values and respects the sacred role of cows in society."
        },
        {
            image: require('../assets/image/gaushala/gauseva01.jpg'),
            path: "/CowEvent02",
            pera: "Donations and volunteers play a crucial role in sustaining our efforts to save and care for cows."
        },
        {
            image: require('../assets/image/gaushala/cowblog03 (4).jpg'),
            path: "/CowEvent03",
            pera: "Our mission is to save and protect cows, sacred beings that hold cultural and ecological significance."
        },
    ]
    let foodata = [
        {
            image: require('../assets/image/annsathi/food001.jpg'),
            path: "/FoodEvent01",
            pera: "We are trying to save food and provide complete support for impoverished children."
        },
        {
            image: require('../assets/image/annsathi/food002.jpg'),
            path: "/FoodEvent02",
            pera: "Every effort to save food and provide for the less fortunate contributes to a better world."

        },
        {
            image: require('../assets/image/annsathi/278165599_4996967023715609_2492716259928601044_n.jpg'),
            path: "/FoodEvent03",
            pera: "We are trying to find solutions to eradicate hunger and poverty, providing hope for the future of children."
        },
    ]
    let environmentdata = [
        {
            image: require('../assets/image/environment/env33.jpg'),
            path: "/EnvirEvent01",
            pera: "Plant trees and participate in afforestation projects to promote save the environment."
        },
        {
            image: require('../assets/image/environment/env44.jpg'),
            path: "/EnvirEvent02",
            pera: "Participate in community clean-up events to keep public spaces free from litter and pollution."
        },
        {
            image: require('../assets/image/environment/env11.jpg'),
            path: "/EnvirEvent03",
            pera: "Protecting natural habitats preserves biodiversity and ecosystem balance."
        },
    ]
    let shikshadata = [
        {
            image: require('../assets/image/shiksha/shiksha1 (1).jpg'),
            path: "/ShikshaEvent01",
            pera: "Conversation between Lord Krishna and Arjuna on the battlefield of Kurukshetra."
        },
        {
            image: require('../assets/image/shiksha/2.jpg'),
            path: "/ShikshaEvent02",
            pera: "Insights into ethical living, personal growth, and the pursuit of a meaningful life are provided by the Bhagavad Gita."
        },
        {
            image: require('../assets/image/shiksha/3.jpg'),
            path: "/ShikshaEvent03",
            pera: "We are trying to read, learn, and teach other people good things from the Bhagavad Gita."
        },
    ]
    let bloodData = [
        {
            image: require('../assets/image/blood/blood-2.jpg'),
            path: "/BloodEvent01",
            pera: "Blood donation is a life-saving act that involves voluntarily giving blood."
        },
        {
            image: require('../assets/image/blood/livebloodbank007-20240219-0011.jpg'),
            path: "/BloodEvent02",
            pera: "Live Blood Bank,is a non-profit association by Social Army."
        },
        {
            image: require('../assets/image/blood/blood-3.jpg'),
            path: "/BloodEvent03",
            pera: "Tips for optimal well-being being a blood donor is a selfless act."
        },
    ]
    let drugdata = [
        {
            image: require('../assets/image/drugbank/drugbank121 (5).jpg'),
            path: "/DrugEvent01",
            pera: "We are trying to provide medicines to those who cannot easily purchase them."
        },
        {
            image: require('../assets/image/drugbank/drugbank121 (1).jpg'),
            path: "/DrugEvent03",
            pera: "Through our Drug Bank, we are trying to provide proper treatment for poor people."
        },
        {
            image: require('../assets/image/drugbank/323618492_596966878903426_2867652921256857217_n.jpg'),
            path: "/DrugEvent02",
            pera: "Our Drug Bank aims to provide affordable medicine to poor people in rural areas."
        },

    ]
    let womendata = [
        {
            image: require('../assets/image/women/Womenempower3.jpg'),
            path: "/WomenEvent01",
            pera: "Empowering Women: Embracing Diversity, Championing Inclusion, Creating Change."
        },
        {
            image: require('../assets/image/women/Women7.jpg'),
            path: "/WomenEvent02",
            pera: "Together We Can: Empowering Women, Creating Change, Building a Better World."
        },
        {
            image: require('../assets/image/women/Women6.jpg'),
            path: "/WomenEvent03",
            pera: " Empowering Women, Enriching Communities: it's known as International Women’s Day."
        },
    ]
    return (
        <>
            <div className='Eventpage_image'>
                <div className="overlay3 w-100">
                    <div className="container">
                        <div className="row justify-content-center align-items-center vh-100 ">
                            <div className="container text-center text-white" data-aos="fade-up"
                                data-aos-anchor-placement="top-bottom" data-aos-duration="1800">
                                <p className="hometext text-center">
                                    Our Team Sees <span className="spncolor"> The Need,</span> Not{" "}
                                    <span className="spncolor">The Cause...</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='py-5'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1500">Our  <span className='headcolor'>Events </span> </div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            eventdata.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i}>
                                            <div className='shadow eventimagezoom rounded-2' style={{ height: "300px" }} data-aos="zoom-in"
                                                data-aos-delay="50"
                                                data-aos-duration="1800" >
                                                <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover rounded-2 w-100' />
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <div className='container m-auto'>
                        <Link to={"/seeallpage"} className='nav-link volunteer p-2 pt-1 fw-medium m-auto my-5 text-center fs-5 mb-2 px-5' > See All <span className='fs-4'><MdOutlineDoubleArrow /></span></Link>

                    </div>
                </div>
                <div className='py-4'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1500">Gau-<span className='headcolor'>Seva </span> </div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            gausevadata.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i} data-aos="zoom-in"
                                            data-aos-delay="50"
                                            data-aos-duration="1800">
                                            <div className='card rounded cardhover h-100'>
                                                <div className="eventcardsize" >
                                                    <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover rounded-top  w-100' />
                                                </div>

                                                <div className=' m-0 start d-flex justify-content-between align-content-center align-items-center p-3'>
                                                    <div className='logoimagesize'>
                                                        <img src={require("../assets/image/logos/gauseva-logo01.png")} alt="" className='img-fluid  w-100 h-100 ' />
                                                    </div>
                                                    <div className='text-start fw-medium ps-1'>
                                                        {x.pera}
                                                    </div>
                                                </div>
                                                <Link to={x.path} className="volunteer px-3 p-1 ms-auto me-auto mb-3 text-decoration-none mt-auto">
                                                    View More{" "}
                                                    <span>
                                                        <MdOutlineDoubleArrow />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }


                    </div>
                </div>

                <div className='py-4'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50" data-aos-duration="1500">paryavaran<span className='headcolor'> raksha</span>
                    </div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            environmentdata.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i} data-aos="zoom-in"
                                            data-aos-delay="50"
                                            data-aos-duration="1800">
                                            <div className='card rounded cardhover h-100'>
                                                <div className="eventcardsize" >
                                                    <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover rounded-top  w-100' />
                                                </div>

                                                <div className=' m-0 start d-flex justify-content-between align-content-center align-items-center p-3'>
                                                    <div className='logoimagesize'>
                                                        <img src={require("../assets/image/logos/paryavaran_raksha-removebg-preview.png")} alt="" className='img-fluid w-100 h-100' />
                                                    </div>
                                                    <div className='text-start fw-medium ps-1'>
                                                        {x.pera}
                                                    </div>
                                                </div>
                                                <Link to={x.path} className="volunteer px-3 p-1 ms-auto me-auto mb-3 text-decoration-none mt-auto">
                                                    View More{" "}
                                                    <span>
                                                        <MdOutlineDoubleArrow />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
                <div className='py-4'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1500"><span className='headcolor'>Ann</span>sathi</div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            foodata.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i} data-aos="zoom-in"
                                            data-aos-delay="50"
                                            data-aos-duration="1800">
                                            <div className='card rounded cardhover h-100'>
                                                <div className="eventcardsize" >
                                                    <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover  w-100 rounded-top' />
                                                </div>

                                                <div className=' m-0 start d-flex justify-content-between align-content-center align-items-center p-3'>
                                                    <div className='logoimagesize'>
                                                        <img src={require("../assets/image/logos/ann_sakshi-removebg-preview.png")} alt="" className='img-fluid w-100 h-100' />
                                                    </div>
                                                    <div className='text-start fw-medium ps-1'>
                                                        {x.pera}
                                                    </div>
                                                </div>
                                                <Link to={x.path} className="volunteer px-3 p-1 ms-auto me-auto mb-3 text-decoration-none mt-auto">
                                                    View More{" "}
                                                    <span>
                                                        <MdOutlineDoubleArrow />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>

                <div className='py-4'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1500"> Live <span className='headcolor'> Blood Bank </span> </div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            bloodData.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i} data-aos="zoom-in"
                                            data-aos-delay="50"
                                            data-aos-duration="1800">
                                            <div className='card rounded cardhover h-100'>
                                                <div className="eventcardsize" >
                                                    <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover rounded-top  w-100' />
                                                </div>
                                                <div className=' m-0 start d-flex justify-content-between align-content-center align-items-center p-3'>
                                                    <div className='logoimagesize'>
                                                        <img src={require("../assets/image/logos/logo.png")} alt="" className='img-fluid w-100 h-100' />
                                                    </div>
                                                    <div className='text-start fw-medium ps-1'>
                                                        {x.pera}
                                                    </div>
                                                </div>
                                                <Link to={x.path} className="volunteer px-3 p-1 ms-auto me-auto mb-3 text-decoration-none mt-auto">
                                                    View More{" "}
                                                    <span>
                                                        <MdOutlineDoubleArrow />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
                <div className='py-4'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1500">  <span className='headcolor'>Shiksha </span> </div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            shikshadata.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i} data-aos="zoom-in"
                                            data-aos-delay="50"
                                            data-aos-duration="1800">
                                            <div className='card rounded cardhover h-100'>
                                                <div className="eventcardsize" >
                                                    <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover rounded-top  w-100' />
                                                </div>

                                                <div className=' m-0 start d-flex justify-content-between align-content-center align-items-center p-3'>
                                                    <div className='logoimagesize'>
                                                        <img src={require("../assets/image/logos/shiksha-logo.png")} alt="" className='img-fluid w-100 h-100' />
                                                    </div>
                                                    <div className='text-start fw-medium ps-1'>
                                                        {x.pera}
                                                    </div>
                                                </div>
                                                <Link to={x.path} className="volunteer px-3 p-1 ms-auto me-auto mb-3 text-decoration-none mt-auto">
                                                    View More{" "}
                                                    <span>
                                                        <MdOutlineDoubleArrow />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
                <div className='py-4'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1500"> Drug <span className='headcolor'> Bank </span> </div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            drugdata.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i} data-aos="zoom-in"
                                            data-aos-delay="50"
                                            data-aos-duration="1800">
                                            <div className='card rounded cardhover h-100'>
                                                <div className="eventcardsize" >
                                                    <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover rounded-top  w-100' />
                                                </div>

                                                <div className=' m-0 start d-flex justify-content-between align-content-center align-items-center p-3'>
                                                    <div className='logoimagesize'>
                                                        <img src={require("../assets/image/logos/drug_bank-removebg-preview.png")} alt="" className='img-fluid w-100 h-100' />
                                                    </div>
                                                    <div className='text-start fw-medium ps-1'>
                                                        {x.pera}
                                                    </div>
                                                </div>
                                                <Link to={x.path} className="volunteer px-3 p-1 ms-auto me-auto mb-3 text-decoration-none mt-auto">
                                                    View More{" "}
                                                    <span>
                                                        <MdOutlineDoubleArrow />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
                <div className='py-4'>
                    <div className='abouthead fs-1 fw-bold text-center' data-aos="fade-up"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-delay="50"
                        data-aos-duration="1500">Mahila<span className='headcolor'>  Shashaktikaran </span> </div>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 m-0 g-5'>
                        {
                            womendata.map((x, i) => {
                                return (
                                    <>
                                        <div className='col' key={i} data-aos="zoom-in"
                                            data-aos-delay="50"
                                            data-aos-duration="1800">
                                            <div className='card rounded cardhover h-100'>
                                                <div className="eventcardsize" >
                                                    <img src={x.image} alt="" className='img-fluid h-100 object-fit-cover rounded-top  w-100' />
                                                </div>
                                                <div className=' m-0 start d-flex justify-content-between align-content-center align-items-center p-3'>
                                                    <div className='logoimagesize'>
                                                        <img src={require("../assets/image/logos/mahila_sashkti-logo02.png")} alt="" className='img-fluid w-100 h-100' />
                                                    </div>
                                                    <div className='text-start fw-medium ps-1'>
                                                        {x.pera}
                                                    </div>
                                                </div>
                                                <Link to={x.path} className="volunteer px-3 p-1 ms-auto me-auto mb-3 text-decoration-none mt-auto">
                                                    View More{" "} <span><MdOutlineDoubleArrow /></span>
                                                </Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>
                </div>
            </div>
            {/* <Main/> */}
        </>
    )
}

export default HOC(Eventpage)