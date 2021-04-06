const url = 'http://localhost:5000/vehicles';

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err));
}

export const getOne = (vehicleId) => {
    return fetch(`${url}/${vehicleId}`)
        .then(res => res.json())
        .catch(err => console.log(err));
}