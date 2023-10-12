import { useState } from "react";

import { Button, Form, Input } from './FormFC.styled';

export const FormFC = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    return (
        <Form>
            <h1>{title}</h1>
            <Input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <Input 
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <Button onClick={() => handleClick(email, pass)}>
                {title}
            </Button>
        </Form>
    )
}

