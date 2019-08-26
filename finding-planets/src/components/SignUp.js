import React, {useState} from 'react';

const SignUp = () => {
    const [user, setUser] = useState({email:'', password:'', confirm: ''})

    const handleChange = event => {
        setUser({...user,
        [event.target.name] : event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user)
    }

    return (
        <div>
            SignUp
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="email"
                name="email"
                value = {user.email}
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="password"
                name="password"
                value = {user.password}
                onChange={handleChange}
                />
                <input 
                type="text" 
                placeholder="password"
                name="confirm"
                value = {user.confirm}
                onChange={handleChange}
                />
                <button>Create</button>
            </form>
        </div>
    )
}

export default SignUp;