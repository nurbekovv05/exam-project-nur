import React, {useState} from 'react';
import logo from '../../image/logo.svg'
import {BsBasketFill, BsSearch} from "react-icons/bs";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {LanguageContext} from "../../store/ActionCreators/ActionCreators";
import {NavLink, useNavigate} from "react-router-dom";

interface IDark {
    dark: any
    isDarkMode: boolean
}

const Header = ({dark, isDarkMode}: IDark) => {
    const dispatch = useAppDispatch()
    const handleChange = (e: React.ChangeEvent<any>) => {
        dispatch(LanguageContext(e.target.value))
    }
    const navigate = useNavigate()
    const [search , setSearch] = useState(false)


    return (
        <div>
            <div className='py-[30px] bg-[#032541]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <div>
                              <NavLink to={'/'}> <img className='w-[200px] ' src={logo} alt="header"/></NavLink>
                            </div>
                            <div className='ml-[100px]'>
                                <div className='text-xl flex items-center gap-6 text-white cursor-pointer'>
                                  <NavLink to={'/basket'}><p>Фильмы</p></NavLink>
                                    <p>Сериалы</p>
                                    <p>Люди</p>
                                    <form action="">
                                        <label htmlFor="">
                                            <input   type="search" onChange={(e) => navigate(`/movies/searchMovie/${e.target.value}`)} className={`${search ? "searchBlock" : "searchNone "} delay-300 transition-all block w-full p-3 pl-10 text-sm outline-0 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`} placeholder="Search" required/>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className='cursor-pointer'>
                            <BsSearch className='text-2xl text-white '/>
                        </div>
                        <div>
                            <select onChange={e => handleChange(e)} className="bg-black/50">
                                <option value="en-US">en</option>
                                <option value="ru-RU">ru</option>
                            </select>
                        </div>
                        <button className='bg-white ml-[70px] rounded px-5 py-2 text-gray-900' onClick={dark}>{isDarkMode ? ' Light Mode' : ' Dark Mode'}</button>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Header;