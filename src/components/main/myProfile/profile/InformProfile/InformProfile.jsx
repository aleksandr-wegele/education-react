import './InformProfile.css';
import AvatarUser from './avatarUser/AvatarUser'
import DescriptionUser from './descroptionUser/DescriptionUser'

function InformProfile() {
  return (
      <div className='inform-profile'>
        <AvatarUser/>
        <DescriptionUser/>
      </div>

  );
}

export default InformProfile;