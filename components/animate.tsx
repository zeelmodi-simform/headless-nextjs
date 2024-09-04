'use client'

import AOS from 'aos';
import { useEffect } from 'react';

type Props = {}

const Animate = (props: Props) => {

    useEffect(() => {
        AOS.init({
            once: true,
            disable: 'phone',
            duration: 1000,
            easing: 'ease-out-cubic',
        })
    })

    return null;
};

export default Animate