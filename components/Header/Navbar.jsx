import NavLinks from "./NavLinks"
import NavMenu from "./NavMenu"

const Navbar = () => {
  return (
    <div className="  flex justify-between items-center p-4">
        <div>
            <NavLinks />
        </div>
        <div>
            <NavMenu />
        </div>
    </div>
  )
}

export default Navbar