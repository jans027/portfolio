import React from 'react'
import { CircleLarge, CircleMedium, CircleSmall, CircleXLarge, CircleXXLarge, ContAnimation, ContInside } from '../styles/BackAnimation'

const BackAnimation = () => {
    return (
        <>
            <ContAnimation>
                <ContInside >
                    <CircleSmall></CircleSmall>
                    <CircleMedium></CircleMedium>
                    <CircleLarge></CircleLarge>
                    <CircleXLarge></CircleXLarge>
                    <CircleXXLarge></CircleXXLarge>
                </ContInside >
            </ContAnimation>
        </>
    )
}

export default BackAnimation