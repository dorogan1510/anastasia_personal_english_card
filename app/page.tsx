'use client'

import EducationDevelopment from '@/components/EducationDevelopment'
import FreeMaterials from '@/components/FreeMaterials'
import MyStudents from '@/components/MyStudents'
import Prices from '@/components/Prices'
import WhatITeach from '@/components/WhatITeach'
import WhoAmI from '@/components/WhoAmI'
import HeroSection from 'components/HeroSection'
import MyLessons from 'components/MyLessons'
import Reviews from 'components/Reviews'
import React from 'react'

export default function Home() {
    return (
        <main>
            <HeroSection />
            <WhoAmI />
            <EducationDevelopment />
            <MyStudents />
            <WhatITeach />
            <MyLessons />
            <Prices />
            <Reviews />
            <FreeMaterials />
        </main>
    )
}
