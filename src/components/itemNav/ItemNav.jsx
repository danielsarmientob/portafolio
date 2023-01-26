
import './css/itemNav.css'

export default function ItemNav({ 
    title='', 
    isSelected=false,
    funOnClick=null 
}) {
    return (
        <li className='item_nav' onClick={ funOnClick }>
            <a>
                <span className={`item_text ${(isSelected)? 'item_select' : ''}`}>{ title }</span>
            </a>
        </li>
    )
}
