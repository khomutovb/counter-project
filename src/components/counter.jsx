import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)
    /*const [imageUrl, setImageUrl] = useState('https://picsum.photos/200') */
    const tags = ['tag1', 'tag2', 'tag3']
    const formCount = () => {
        return count === 0 ? 'Ноль' : count
    }
    let classes = 'badge m-2  bg-'
    classes += count === 0 ? 'danger' : 'primary'
    const getBageClasses = () => {
        return classes
    }
    const renderTags = () => {
        if (tags.length === 0) return 'Тегов нет'
        return tags.map((tag) => {
            <li key={tag}>{tag}</li>
        })
    }
    const handleIncrement = productId => {
        setCount(count + 1)
        console.log(productId)
    }
    const handleDecrement = productId => {
        if (count != 0) {
            setCount(count - 1)
            console.log(productId)
        }
    }
    return (
        <React.Fragment>
            {/*<img src={imageUrl} alt=""/> */}
            {tags.length === 0 && 'Теги не найдеты'}
            <ul>
                {renderTags()}
            </ul>
            <span className={getBageClasses()}>{formCount()}</span>
            <button onClick={() => handleIncrement({ id: 1 })} className='btn btn-secondary btn-sm'>Increment</button>
            <button onClick={() => handleDecrement({ id: 1 })} className='btn btn-secondary btn-sm'>Decrement</button>
        </React.Fragment>
    );
}

export default Counter;