import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Heart, Camera, Music, Utensils, Gift } from "lucide-react"

const WeddingPackage = () => {
  const features = [
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Dekorasi pelaminan, bunga bibir panggung, kursi pengantin, kotak amplop standing flower, gate bunga, area VIP, kursi tiffany, karpet merah, lorong pergola"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      text: "MUA dan attire"
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      text: "12 Macam menu makanan"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "4 buku tamu"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      text: "LED videotron (menampilkan foto / video selama acara)"
    },
    {
      icon: <Utensils className="w-5 h-5" />,
      text: "Test food untuk 6 orang"
    },
    {
      icon: <Music className="w-5 h-5" />,
      text: "Entertainment Akustik / Elektone"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      text: "Photobooth / Selfie box / Videobooth 360 unlimited 3jam"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "MC akad dan resepsi"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      text: "Photographer untuk foto akad dan resepsi (file only)"
    },
    {
      icon: <Gift className="w-5 h-5" />,
      text: "1 kamar honeymoon"
    },
    {
      icon: <Camera className="w-5 h-5" />,
      text: "Gratis pemakaian area golf baruga / wisma kalla untuk foto prewed"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Pemakaian ballroom selama 6 jam"
    }
  ]

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Wedding di Saoraja Ballroom
          </h2>
          <p className="text-xl text-muted-foreground animate-slide-up">
            Wisma Kalla - Paket Pernikahan Eksklusif
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-elegant border-none animate-scale-in">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center items-center gap-4 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  500 Pax
                </Badge>
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  Rp 59.995.000
                </div>
              </div>
              <div className="text-muted-foreground">
                Additional <span className="font-semibold text-primary">Rp 85.000/Pax</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 hover:shadow-soft"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-primary mt-1 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <p className="text-foreground leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 text-center">
                <p className="text-muted-foreground mb-6">
                  Wujudkan hari bahagia Anda dengan paket pernikahan lengkap di ballroom terbaik Makassar
                </p>
                <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow hover:scale-105 transform transition-all duration-300 font-semibold">
                  Konsultasi Sekarang
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default WeddingPackage