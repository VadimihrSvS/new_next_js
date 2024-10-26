import prisma from '../../lib/prisma'

export default async function handler(req, res) {
    console.log(req.method)
    if (req.method === 'POST') {
        const { name } = req.body;
        const result = await prisma.user.create({
            data: {
                name,
                role: "noname"
            },
        });
        res.status(201).json(result);
    } else if (req.method === 'GET') {
        return res.json({ message: "Hello world" })
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }


}