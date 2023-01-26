import { useState } from 'react'

import './css/header.css'
import ItemNav from '../itemNav/ItemNav'
import ItemGithub from '../items/ItemGithub';
import ItemFacebook from '../items/ItemFacebook';
import ItemLinkedin from '../items/ItemLinkedin';
import ItemEmail from '../items/ItemEmail';
import LogonApp from '../logoApp/LogonApp';
import { useTranslation } from 'react-i18next';


export default function Header() {

    const {t} = useTranslation('global');
    const [selectItems, setSelectItems] = useState({
        'introduccion': true,
        'proyectos': false,
        'skill': false,
        'hablemos': false
    });
    
    const onClickItem=(text_item)=>{
        setSelectItems({
            'introduccion': (text_item === 'introduccion'),
            'proyectos': (text_item === 'proyectos'),
            'skill': (text_item === 'skill'),
            'hablemos': (text_item === 'hablemos')
        })
    }
    return (
        <header className='header'>
            <LogonApp/>
            <div className="menu">
                <ul className='menu_items'>
                    <ItemNav funOnClick={ ()=> onClickItem('introduccion') } title={t('header.introduccion')} isSelected={ selectItems['introduccion'] }/>
                    <ItemNav funOnClick={ ()=> onClickItem('proyectos') } title={t('header.proyectos')} isSelected={ selectItems['proyectos'] }/>
                    <ItemNav funOnClick={ ()=> onClickItem('skill') } title='Skill' isSelected={ selectItems['skill'] }/>
                    <ItemNav funOnClick={ ()=> onClickItem('hablemos') } title={t('header.hablemos')} isSelected={ selectItems['hablemos'] }/>
                </ul>
            </div>
            <div className="social">
                <div className='social_item'>
                    <ItemGithub/>
                    <span className='title_socialItem'>Github</span>
                </div>
                <div className='social_item'>
                    <ItemFacebook/>
                    <span className='title_socialItem'>Facebook</span>
                </div>
                <div className='social_item'>
                    <ItemLinkedin/>
                    <span className='title_socialItem'>Linkedin</span>
                </div>
                <div className='social_item'>
                    <ItemEmail/>
                    <span className='title_socialItem'>Email</span>
                </div>
            </div>
        </header>
    )
}
