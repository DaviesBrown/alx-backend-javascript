import { createUser, uploadPhoto } from "./utils.js";

export default function handleProfileSignup() {
    Promise.all([createUser(), uploadPhoto()])
        .then((value) => {
            let profile = 
            `${value[1].body} ${value[0].firstname} ${value[0].lastname}`;
            console.log(profile);
        });
}
