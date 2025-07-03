// interface User {
//     name: string
//     id: number
//     password: string
//     email: string
// }

// type updateProps = Pick<User, 'name' | 'age' | 'password'>;
// type updatePropsOptional = Partial<updateProps>

// function updateUserDetails(updatedDetails: updatePropsOptional) {
//     //
// }


// type User = {
//     name: string,
//     // readonly name: string particular value
//     id: number
// }

// const user: Readonly<User> = {
//     // whole obj is readonly
//     name: "Kishan",
//     id: 21
// }


// type UsersDetails = {
//     [key: string]: string
// }

type Users = Record<string, { age: number, name: string, userId: number }>

const user: Users = {
    "admin@qa": {
        age: 21,
        name: "kishna",
        userId: 21

    },
    "hr@busines": {
        age: 24,
        name: "harshita",
        userId: 43
    },
    "lead@cloud": {
        age: 45,
        name: "harikrishna",
        userId: 654
    }
}