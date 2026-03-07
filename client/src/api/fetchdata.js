export default async function fetchData() {
    const res = await fetch("http://localhost:3000/movies")
    try {
        if (!res.ok) {
            throw new Error("fail")
        }
        return res.json()

    }catch(err){
        console.log(err)
    }
}
