export const dataBase = async () => {
    try {
        const response = await fetch('http://localhost:5000/users');
        const jsonData = await response.json();
        const users = jsonData;

        console.log('datos ', jsonData)

        return users.map(users => ({
            id: users[0],
            userName: users[1],
            password: users[2]
        }));
    } catch (e) {
        throw new Error('Error fetching data');
    }
}
