T�l�charger l'ensemble des fichiers/dossiers n�cessaires de l'application via le lien GitHub.

Pour Installer Ionic : 

-Allez dans votre ligne de commande est effectuer la commande suivante : npm install -g ionic

- Acc�der � votre dossier dans la ligne de commande ( Exemple : bureau / Cd gsbbts2018 ) 

Une fois � l'int�rieur du dossier pour ex�cuter votre code : ionic serve -l 
(Petite pr�cision : Vous pouvez installer Ionic en premier mais par la suite suivez les �tapes concernant Firebase ainsi ensuite vous allez pouvoir lancer l'application)


Pour pouvoir se connecter a firebase : 

- Allez sur votre navigateur puis allez sur le site : Firebase.

- Vous devez cr�er votre compte sur Firebase (Exemple : vous pouvez vour servir d'un compte Google)

- Puis cliquer sur : Create Project. Nommer votre Projet.

Sur la page suivante vous allez avoir trois petites logos en formes de cercle. Pour cela choissisez le logo "Web" qui est repr�senter sous forme : "</>" 

Enfin apr�s avoir cliquer ce logo il faudrat alors copier de la ligne "ApiKey" jusqu'a la ligne "MessagingSenderiD" et le remplacer sur votre code.

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

Enfin il faudrat simplement coller ce que vous avez copier pr�cedamment en rempla�ant � partir de la ligne : Apikey � la ligne messagingSenderId.

