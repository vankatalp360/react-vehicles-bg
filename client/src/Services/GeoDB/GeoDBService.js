const coutriesUrl = 'https://parseapi.back4app.com/classes/Continentscountriescities_Country?limit=300&order=-name&keys=name';
const appId = 'X3aJcW0PiP9hzv03LTdDPbqOZjo8cdcJv6pLQuii';
const appKey = 'xhgEeO0NOvUllKoKkQOhH18J2dkF3qGxURy3ugsV';

export const getAllCountries = () => {
    return fetch(
        coutriesUrl,
        {
            headers: {
                'X-Parse-Application-Id': `${appId}`,
                'X-Parse-REST-API-Key': `${appKey}`,
              }
        })
        .then(res => res.json())
        .catch(err => console.log(err));
}
