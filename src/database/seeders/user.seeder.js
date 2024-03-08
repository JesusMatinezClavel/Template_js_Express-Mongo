import User from "../../models/User"
import bcrypt from "bcrypt";

export const generateControlUsers = async () => {

    const user = await User.create(
        {
            name: 'user',
            email: 'user@email.com',
            password: bcrypt.hashSync('123456', 8)
        }
    )

    const admin = await User.create(
        {
            name: 'admin',
            email: 'admin@email.com',
            password: bcrypt.hashSync('123456', 8)
        }
    )

    const superadmin = await User.create(
        {
            name: 'superadmin',
            email: 'superadmin@email.com',
            password: bcrypt.hashSync('123456', 8)
        }    
    )

    console.log('--------------------------------------')
    console.log('control users created!')
    console.log('--------------------------------------')

}