import { FaTwitter, FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { DiDrupal } from "react-icons/di";
import { DiDotnet } from "react-icons/di";

export const socials = [
    {
        name: 'twitter',
        url: FaTwitter,
    },
    {
        name: 'linkedin',
        url: FaLinkedin,
    },
    {
        name: 'instagram',
        url: FaInstagramSquare,
    },
    {
        name: 'facebook',
        url: FaFacebook,
    },
];

export const newFeatures = [
    {
        imgUrl: { DiDrupal },
        title: 'Career Consulting',
        subtitle:
            'we have the latest update with new world for you to try never mind',
    },
    {
        imgUrl: { DiDotnet },
        title: 'Hospitality',
        subtitle:
            'In the latest update, your eyes are narrow, making the world more realistic than ever',
    },
];
