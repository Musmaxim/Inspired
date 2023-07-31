import { Navigation } from "./Navigation/Navigation"
import { Top } from "./Top/Top"
import s from './Header.module.scss'
import { Search } from "../Search/Search"
import { useState } from "react"

export const Header = () => {
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <header className={s.header}>
            <Top openSearch={openSearch} setOpenSearch={setOpenSearch}/>
            <Search openSearch={openSearch}/>
            <Navigation/>
        </header>
    )

}