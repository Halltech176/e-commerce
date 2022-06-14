import {useAuth} from '../Auth/Auth'
const Profile = () => {
    const auth = useAuth()
    return (
        <hi>Welvome to your profile page {auth.user}</hi>
    )
}
export default  Profile