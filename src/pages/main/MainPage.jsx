import { useOutletContext } from 'react-router-dom';

import { Main } from "../../components/Main.jsx"
import { Card } from "../../components/Card.jsx"
import { useEffect } from 'react';
import usePageSetup from '../../hooks/usePageSetup.js';


export const MainPage = () => {
    usePageSetup("home");

    return (
        <div className="w-full h-fit flex flex-col gap-8">
            <Card />
            <Card />
        </div>
    )
}