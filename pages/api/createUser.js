import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name } = req.body;
        const result = await prisma.user.create({
            data: {
                name,
                role: "123"
            },
        });
        res.status(201).json(result);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}