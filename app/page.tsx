'use client'

import EducationDevelopment from '@/components/EducationDevelopment'
import FreeMaterials from '@/components/FreeMaterials'
import Mentor from '@/components/Mentor'
import MyStudents from '@/components/MyStudents'
import Prices from '@/components/Prices'
import SpeakClub from '@/components/SpeakClub'
import WhatITeach from '@/components/WhatITeach'
import WhoAmI from '@/components/WhoAmI'
import HeroSection from 'components/HeroSection'
import MyLessons from 'components/MyLessons'
import Reviews from 'components/Reviews'

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
            <SpeakClub />
            <Mentor />
            <Reviews />
            <FreeMaterials />
        </main>
    )
}
