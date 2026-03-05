import fs from 'fs/promises'

export default async function read(path) {
    try {
        const data = await fs.readFile(path, 'utf-8')
        return await JSON.parse(data)
    }
    catch (err) {
        console.log(err)
    }
}

