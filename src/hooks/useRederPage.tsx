import React from 'react';
import {useParams} from "react-router-dom";
import {IParams} from "../utils/types/types";
import NotFound from "../components/global/Notfound/NotFound";


const generatePage = (name: string) => {
    try {
        return React.createElement(require(`../pages/${name}`).default || null)
    } catch (err) {
        return <NotFound/>
    }

}

function usePageRender() {
    const {page, slug}: IParams = useParams()
    let name = '';
    if (page) {
        name = slug ? `${page}/[slug]` : `${page}`
    }
    return generatePage(name)
}

export default usePageRender;