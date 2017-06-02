import Notification from './notification';


const notificationBar = new Notification(".notification-bar");
const notificationBarTwo = new Notification(".notification-barTwo");
let countClick = 0;

notificationBar.showMessage("Welkom op deze pagina");
notificationBarTwo.showMessage("Welkom op deze pagina2");

document.addEventListener("click",
                          () => {
                              countClick++;
                              notificationBar.showMessage(`je hebt ${countClick}x geklikt`);
                              notificationBarTwo.showMessage(`je hebt ${countClick}x geklikt!`);
                          });