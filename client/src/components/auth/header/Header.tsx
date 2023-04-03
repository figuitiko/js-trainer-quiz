import MainHeaderInfo from "./MainHeaderInfo"
import UserInfo from "./UserInfo"

const Header = () => {
  return (
    <div className="col-start-2 col-end-3 p-8  shadow-lg flex">
      <MainHeaderInfo />
      <UserInfo />
    </div>
  )
}

export default Header