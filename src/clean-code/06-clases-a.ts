(() => {

    //No aplicando el principio de responsabilidad única


    type Gender = 'M' | 'F';

    class Person {
        constructor(public name: string, public gender: Gender, public birthdate: Date) { }
    }

    class User extends Person {
        public lastAccess: Date
        constructor(
            public email: string,
            public rol: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date
        }

        checkCredentials() {
            return true;
        }
    }


    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            rol: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, rol, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/user/home',
        '/home',
        'correo@correo.com',
        'Admin',
        'Nicolas',
        'M',
        new Date('1998-10-18')
    );


    console.log({ userSettings })


})()