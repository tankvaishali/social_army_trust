import React from 'react';
import { LiaCertificateSolid } from 'react-icons/lia';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { TbFileCertificate } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Mediacoverage() {
    let itemData = [
        {
            img: require("../assets/image/awards and certificates/media1.jpg")
        },
        {
            img: require("../assets/image/awards and certificates/media2.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media3.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media4.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media5.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media6.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media7.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media8.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media9.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media10.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media11.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media12.jpg"),
        },
        {
            img: require("../assets/image/awards and certificates/media13.jpg"),
        },

        ]

        const theme = useTheme();
        const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
        const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
        let cols = 3;
        if (mdScreen) { cols = 2; }
        if (smScreen) { cols = 1; }

    return (
        <>
            <div className='container py-5 text-center'>
                <div className='fw-bold fs-2 mb-5' style={{ color: "#654433" }}> <span className='fs-3 '><LiaCertificateSolid className='me-2' /></span>Achievements</div>
                <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <div className='abouthead fs-1 fw-bold'>Join Us:</div>
                    <div className="pera pt-1 headcolor" style={{ fontFamily: 'Verdana, Geneva, sans-serif', fontSize: '13px', fontWeight: 'bold', textAlign: 'center' }}>
                        <span className='headcolor'>Social Army Cheritable Trust </span>Hosts Annual Charity Walkathon
                    </div>
                </div>
                <div className='abouthead fs-1 fw-bold '><span className='headcolor'><TbFileCertificate className='me-2' /> Mediacoverage</span> </div>
                <div className='row m-1 p-0 g-5'>
                    <Box sx={{ flexGrow: 1 }}>
                        <ImageList variant="masonry" cols={cols} gap={30} sx={{ maxWidth: '100%', margin: 'auto' }}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{ border: "2px solid #654433", width: '100%', height: '100%' }}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                </div>
                <Link to={"/eventpage"} className='nav-link volunteer p-2 pt-1  m-auto my-5 text-center fs-5 mb-2' ><span className='fw-bold fs-4'><MdKeyboardDoubleArrowLeft /></span> Bact To Home</Link>

            </div>
        </>
    )
}

export default Mediacoverage
