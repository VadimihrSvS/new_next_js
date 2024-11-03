import prisma from '../../lib/prisma'
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        var { organization, firstName, lastName, surName, password, regConfPassword } = req.body;
        if (!firstName || !lastName || !surName || !password || !regConfPassword) return res.status(401).json({ message: "Введите все данные" })

        if (regConfPassword !== password) return res.status(401).json({ message: "Пароли не совпадают" })


        const hashPassword = await bcrypt.hash(password, 5);

        const result = await prisma.user.create({
            data: {
                organization,
                firstName,
                lastName,
                surName,
                password: hashPassword,
            },
        });
        return res.status(201).json(result);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }


}