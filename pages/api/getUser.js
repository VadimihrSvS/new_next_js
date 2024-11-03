import prisma from '../../lib/prisma'
var jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

export default async function handler(req, res) {

    if (req.method === 'GET') {
        const { lastName, password } = req.query;
        if (!lastName) return res.status(401).json({ message: "Введите все данные" })
        if (!password) return res.status(401).json({ message: "Введите пароль" })

        const user = await prisma.user.findFirst({
            where: {
                lastName,
            },
        })
        if (!user) return res.status(401).json({ message: "Нет такого пользователя" })
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) return res.status(401).json({ message: "Неверный пароль" })
        if (!user.isConfirmed) return res.status(401).json({ message: "Пользователь не подтверждён" })
        const { organization, firstName, surName, isConfirmed } = user;
        const token = await jwt.sign({ organization, firstName, surName, isConfirmed }, process.env.SECRET_KEY);
        return res.status(201).json({ token })

    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}