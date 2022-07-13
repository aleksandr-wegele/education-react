import './DescriptionUser.css'

function DescriptionUser() {
  return (
      <div className='profile__description'>
        <h2 className='profile__description-name'>Александр В.</h2>
        <p className='profile_description description-birth'>День рождения:<strong className='profile__description-birth'>24 июля</strong></p>
        <p className='profile_description description-city'>Город:<strong className='profile__description-city'>Ростов-на-Дону</strong></p>
        <p className='profile_description description-educetion'>Образование:<strong className='profile__description-education'>Высшее</strong></p>
        <p className='profile_description description-web-site'>Веб сайт:<strong className='profile__description-web-site'><a href="https://vk.com/aleksandr_wegele" className='profile__description-web-site_link'>aleksandr_wegele</a></strong></p>
      </div>

  );
}

export default DescriptionUser;