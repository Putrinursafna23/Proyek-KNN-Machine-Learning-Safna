import { Crown, Phone, MapPin } from "lucide-react"

const Header = () => {
  return (
    <header className="bg-gradient-primary text-primary-foreground shadow-elegant">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Crown className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Saoraja Ballroom</h1>
              <p className="text-primary-foreground/80 text-sm">Lebih Cepat Lebih Baik</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+62 411 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Jl. Dr. Ratulangi, Makassar</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header