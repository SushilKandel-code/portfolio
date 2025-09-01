import ProfileCard from "../blocks/Components/ProfileCard/ProfileCard.jsx"
import profileUrl from "../images/profile.jpg"

const Profile = () => {
    return (<ProfileCard
        name="Sushil Kandel"
        title="Developer"
        handle="ig__skg"
        status="Online"
        contactText="Contact Me"
        avatarUrl={profileUrl}
        showUserInfo={true}
        enableTilt={true}
        enableMobileTilt={false}
        onContactClick={() => console.log('Contact clicked')}
    />);
}

export default Profile;