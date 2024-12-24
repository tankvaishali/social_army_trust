import React from 'react';
import Slider from 'react-slick';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { PiHandsPrayingFill } from 'react-icons/pi';

function Profile() {
    const profiledata = [
        { image: require("../assets/image/c-01.JPEG") },
        { image: require("../assets/image/c-02.JPEG") },
        { image: require("../assets/image/c-03.JPEG") },
        { image: require("../assets/image/c-04.JPEG") },
        { image: require("../assets/image/c-05.JPEG") },
        { image: require("../assets/image/c-06.JPEG") },
        { image: require("../assets/image/c-07.JPEG") },
        { image: require("../assets/image/c-08.JPEG") },
        { image: require("../assets/image/c-09.JPEG") },
    ];

    const CustomPrevArrow = ({ onClick }) => (
        <div className="custom-arrow custom-prev" onClick={onClick}>
            <FaArrowAltCircleLeft size={30} />
        </div>
    );

    const CustomNextArrow = ({ onClick }) => (
        <div className="custom-arrow custom-next" onClick={onClick}>
            <FaArrowAltCircleRight size={30} />
        </div>
    );

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
            <div className="profile_bg my-5 overflow-hidden">
                <div className="container">
                    <div className="row py-5 d-flex align-items-stretch justify-content-center">
                        {/* Left Column */}
                      
                        {/* Right Column */}
                        <div className="col-12 col-lg-7 d-flex flex-column" data-aos="fade-right" data-aos-duration="1500"   data-aos-delay="50">
                            <div className="px-3 py-5 h-100">
                                <div className="abouthead fw-bold display-6">
                                    <span className="text-white">
                               <span><PiHandsPrayingFill/></span>     A Life of Dedication
                                    </span>
                                </div>
                                <div className="py-2 text-white">
                                    <p>
                                        Late Chirag kukadiya’s remarkable
                                        contributions to Social Army Trust will
                                        forever remain a source of pride and
                                        inspiration. His unwavering commitment
                                        to serving society and his compassionate
                                        outlook touched countless lives and left
                                        an indelible mark. His mission in life
                                        was not just to help people but to set a
                                        living example of love, empathy, and
                                        dedication to humanity. Through his
                                        visionary efforts, he introduced
                                        innovative ways to support the
                                        underprivileged and inspired the younger
                                        generation to follow in his footsteps.
                                    </p>
                                    <p>
                                        Even after his untimely demise, the
                                        Social Army Trust continues to carry
                                        forward his vision and values. Chirag
                                        Patel’s dedicated contributions serve as
                                        a guiding light for all of us, inspiring
                                        the trust to remain steadfast in its
                                        mission to uplift society.
                                    </p>
                                </div>
                                <Slider {...sliderSettings}>
                                    {profiledata.map((item, index) => (
                                        <div
                                            key={index}
                                            className="procardsize"
                                        >
                                            <img
                                                src={item.image}
                                                alt={`Event ${index + 1}`}
                                                className="protimagezoom rounded-5 w-100 h-100 object-fit-cover"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5 d-flex flex-column" data-aos="fade-left" data-aos-duration="1500"   data-aos-delay="50" >
                            <div
                                className="px-3 py-5 h-100"
                                style={{ position: "relative" }}
                            >
                                <div style={{ width: "100%", height: "100%" }}>
                                    <img
                                        src={require("../assets/image/chiragkukadiyaprofile.jpg")}
                                        alt=""
                                        className="profile_image w-100 h-100 object-fit-cover"
                                    />
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
