Télécharger l'ensemble des fichiers/dossiers nécessaires de l'application via le lien GitHub.

Pour Installer Ionic : 

-Allez dans votre ligne de commande est effectuer la commande suivante : npm install -g ionic

- Accèder à votre dossier dans la ligne de commande ( Exemple : bureau / Cd gsbbts2018 ) 

Une fois à l'intérieur du dossier pour exécuter votre code : ionic serve -l 
(Petite précision : Vous pouvez installer Ionic en premier mais par la suite suivez les étapes concernant Firebase ainsi ensuite vous allez pouvoir lancer l'application)


Pour pouvoir se connecter a firebase : 

- Allez sur votre navigateur puis allez sur le site : Firebase.

- Vous devez créer votre compte sur Firebase (Exemple : vous pouvez vour servir d'un compte Google)

- Puis cliquer sur : Create Project. Nommer votre Projet.

Sur la page suivante vous allez avoir trois petites logos en formes de cercle. Pour cela choissisez le logo "Web" qui est représenter sous forme : "</>" 

Enfin après avoir cliquer ce logo il faudrat alors copier de la ligne "ApiKey" jusqu'a la ligne "MessagingSenderiD" et le remplacer sur votre code.

1) Pour remplacer sur votre code ouvrer votre IDE exemple : ATOM 

2) Allez dans l'onglet : "app.firebase.config.ts"

Sur cette page vous allez avoir ceci : 


export const FIREBASE_CONFIG = {
    apiKey: "AIzaSyB2NHeGW4LTaIOtzYYLFSViUL321yE7JC8",
    authDomain: "gsbbts2018.firebaseapp.com",
    databaseURL: "https://gsbbts2018.firebaseio.com",
    projectId: "gsbbts2018",
    storageBucket: "gsbbts2018.appspot.com",
    messagingSenderId: "981841261176"
};

Enfin il faudrat simplement coller ce que vous avez copier précedamment en remplaçant à partir de la ligne : Apikey à la ligne messagingSenderId.

