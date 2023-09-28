import { createUser, uploadPhoto } from './utils';

export default function handleProfileSignup() {
  Promise.all([createUser(), uploadPhoto()])
    .then((value) => {
      const profile = `${value[1].body} ${value[0].firstname} ${value[0].lastname}`;
      console.log(profile);
    });
}
