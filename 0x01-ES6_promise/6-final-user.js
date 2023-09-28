import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const signup = signUpUser(firstName, lastName);
  const upload = uploadPhoto(filename);
  const promises = [signup, upload];
  return Promise.allSettled(promises)
    .then((results) => {
      const r = results.map((result) => ({
        status: result.status,
        value: result.value || `${result.reason}`,
      }));
      return r;
    });
}
