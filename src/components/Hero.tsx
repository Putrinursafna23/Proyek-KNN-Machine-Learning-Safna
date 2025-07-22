import { Button } from "@/components/ui/button"
import { Heart, Star, Users } from "lucide-react"
import ballroomHero from "@/assets/ballroom-hero.jpg"

const Hero = () => {
  return (
    <section 
      className="relative py-20 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ballroomHero})` }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Saoraja <span className="text-accent">Ballroom & Gastros Cafe</span> Makassar
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Wujudkan momen sakral dan berkesan di ballroom terbaik Makassar dengan paket lengkap yang sempurna
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button variant="elegant" size="lg" className="text-lg px-8 py-4">
              <Heart className="w-5 h-5 mr-2" />
              Lihat Paket Wedding
            </Button>
            <a href="https://www.instagram.com/saorajaballroom_/" target="_blank" rel="noopener noreferrer"><Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100">
              Konsultasi Gratis
            </Button></a>
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-scale-in">
            <div className="p-6 bg-primary-foreground/10 backdrop-blur-md rounded-lg shadow-soft border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">Premium Quality</h3>
              <p className="text-primary-foreground/80">Layanan berkualitas tinggi dengan standar internasional</p>
            </div>

            <div className="p-6 bg-primary-foreground/10 backdrop-blur-md rounded-lg shadow-soft border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">500 Kapasitas</h3>
              <p className="text-primary-foreground/80">Ballroom luas yang dapat menampung hingga 500 tamu</p>
            </div>

            <div className="p-6 bg-primary-foreground/10 backdrop-blur-md rounded-lg shadow-soft border border-primary-foreground/20">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">All-in-One</h3>
              <p className="text-primary-foreground/80">Paket lengkap dari dekorasi hingga dokumentasi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
    </section>
  )
}

export default Hero