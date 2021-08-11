import Button from './Button'

const Header = (props) => {
    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className='header'>
            <h1>Task tracker</h1>
            <Button 
                color='green' 
                text='Add' 
                onClick={onClick}
            />
        </header>
    )
}

export default Header
