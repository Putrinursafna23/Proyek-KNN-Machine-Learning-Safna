import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"

// Import gambar makanan
import sotoMakassar from "@/assets/soto-makassar.jpg"
import cotoMakassar from "@/assets/coto-makassar.jpg"
import esPisangIjo from "@/assets/es-pisang-ijo.jpg"
import pallubasa from "@/assets/pallubasa.jpg"
import konroBakar from "@/assets/konro-bakar.jpg"
import esTeler from "@/assets/es-teler.jpg"
import nasiKuning from "@/assets/nasi-kuning.jpg"
import kopiToraja from "@/assets/kopi-toraja.jpg"

const MenuShowcase = () => {
  const menuItems = [
    {
      name: "Soto Makassar",
      description: "Sup tradisional khas Makassar dengan daging sapi dan jeroan",
      price: "Rp 45.000",
      category: "Makanan Utama",
      rating: 4.8,
      isSpicy: true,
      isSoup: true,
      type: "warming",
      image: sotoMakassar
    },
    {
      name: "Coto Makassar",
      description: "Hidangan ikonik Makassar dengan kuah kacang yang gurih",
      price: "Rp 50.000",
      category: "Makanan Utama", 
      rating: 4.9,
      isSpicy: true,
      isSoup: true,
      type: "warming",
      image: cotoMakassar
    },
    {
      name: "Es Pisang Ijo",
      description: "Dessert segar khas Makassar dengan pisang dan santan",
      price: "Rp 25.000",
      category: "Dessert",
      rating: 4.7,
      isSpicy: false,
      isSoup: false,
      type: "refreshing",
      image: esPisangIjo
    },
    {
      name: "Pallubasa",
      description: "Sup daging sapi dengan bumbu rempah yang kaya",
      price: "Rp 48.000",
      category: "Makanan Utama",
      rating: 4.6,
      isSpicy: true,
      isSoup: true,
      type: "warming",
      image: pallubasa
    },
    {
      name: "Konro Bakar",
      description: "Iga sapi bakar dengan bumbu khas Makassar",
      price: "Rp 65.000",
      category: "Makanan Utama",
      rating: 4.8,
      isSpicy: true,
      isSoup: false,
      type: "warming",
      image: konroBakar
    },
    {
      name: "Es Teler Makassar",
      description: "Minuman segar dengan campuran buah dan kelapa muda",
      price: "Rp 20.000",
      category: "Minuman",
      rating: 4.5,
      isSpicy: false,
      isSoup: false,
      type: "refreshing",
      image: esTeler
    },
    {
      name: "Nasi Kuning Special",
      description: "Nasi kuning dengan lauk pauk lengkap khas Sulawesi",
      price: "Rp 35.000",
      category: "Makanan Utama",
      rating: 4.4,
      isSpicy: false,
      isSoup: false,
      type: "neutral",
      image: nasiKuning
    },
    {
      name: "Kopi Toraja",
      description: "Kopi premium dari tanah Toraja dengan cita rasa yang khas",
      price: "Rp 18.000",
      category: "Minuman",
      rating: 4.9,
      isSpicy: false,
      isSoup: false,
      type: "warming",
      image: kopiToraja
    }
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Menu Favorit Gastros Cafe
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Cita rasa autentik Makassar yang menggugah selera
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map((item, index) => (
            <Card 
              key={index}
              className="bg-gradient-card shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-none animate-scale-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Gambar makanan */}
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="text-xs bg-white/90 backdrop-blur-sm">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 text-yellow-500 bg-white/90 backdrop-blur-sm rounded px-2 py-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-primary">
                      {item.price}
                    </span>
                    <div className="flex gap-2">
                      {item.isSpicy && (
                        <Badge variant="outline" className="text-xs border-red-200 text-red-600">
                          Pedas
                        </Badge>
                      )}
                      {item.isSoup && (
                        <Badge variant="outline" className="text-xs border-blue-200 text-blue-600">
                          Berkuah
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>15-20 min</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>1-2 porsi</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ingin menemukan menu yang sempurna untuk selera Anda?
          </p>
          <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow hover:scale-105 transform transition-all duration-300 font-semibold">
            Coba Survei Rekomendasi
          </button>
        </div>
      </div>
    </section>
  )
}

export default MenuShowcase