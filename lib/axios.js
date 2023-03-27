import Axios from "axios";

const headers = {
    'X-RapidAPI-Key': "1b60aac88fmsh165d82fed056bc9p1bd72cjsn0c7ac4b0aef3",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com"
}

export const axios = await Axios.create({
    baseURL: 'https://bayut.p.rapidapi.com/',
    headers: headers
})

