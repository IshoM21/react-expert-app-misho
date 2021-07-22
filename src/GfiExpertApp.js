import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// Componente 
const GifExpertApp = () =>{

    // const categories = ['One Punch', 'Horimiya', 'Dragon Ball']
    const [categories, setCategories] = useState( ['One Piece'])

    // const handleAdd = () => {
    //     // const c = [...categories]
    //     // c.push('One Piece')
    //     // setCategories(c)

    //     setCategories( cats => [...cats, 'One Piece'])
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories= { setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map( (category, i) => 
                        <GifGrid 
                        key={category}
                        category= {category}
                        />
                    )
                }
            </ol>
        </>
    )
}


export default GifExpertApp