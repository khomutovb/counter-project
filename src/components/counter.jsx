import React from 'react';

const Counter = ({ value, id, name, onIncrement, onDecrement, onDelete }) => {
    /*const [imageUrl, setImageUrl] = useState('https://picsum.photos/200') */
    const tags = ['tag1', 'tag2', 'tag3']
    const formValue = () => {
        return value === 0 ? 'Ноль' : value
    }
    let classes = 'badge m-2  bg-'
    classes += value === 0 ? 'danger' : 'primary'
    const getBadgeClasses = () => {
        return classes
    }
    return (
        <React.Fragment>
            <div>
                {/*<img src={imageUrl} alt=""/> */}
                <h4>{name}</h4>
                {tags.length === 0 && 'Теги не найдеты'}
                <span style={{ minWidth: 50 }} className={getBadgeClasses()}>{formValue()}</span>
                <button className='btn btn-secondary btn-sm m-1' onClick={() => onIncrement(id)}>Increment</button>
                <button className='btn btn-secondary btn-sm m-1' onClick={() => onDecrement(id)}>Decrement</button>
                <button className="btn btn-danger btn-sm m-1" onClick={() => onDelete(id)}>Delete</button>
            </div>
        </React.Fragment>
    );
}

export default Counter;