import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChefHat, Coffee, IceCream } from "lucide-react"

interface SurveyAnswers {
  spicyPreference: string
  soupPreference: string
  temperaturePreference: string
  eatingStyle: string
  dessertPreference: string
}

const FoodSurvey = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<SurveyAnswers>({
    spicyPreference: "",
    soupPreference: "",
    temperaturePreference: "",
    eatingStyle: "",
    dessertPreference: ""
  })
  const [showResults, setShowResults] = useState(false)

  const questions = [
    {
      id: "spicyPreference",
      question: "Apakah anda suka makanan pedas?",
      options: ["Ya", "Tidak", "Sedang-sedang"]
    },
    {
      id: "soupPreference", 
      question: "Apakah anda ingin makanan berkuah?",
      options: ["Ya", "Tidak"]
    },
    {
      id: "temperaturePreference",
      question: "Apakah kondisi anda saat ini, ingin sesuatu yang menyegarkan atau menghangatkan tubuh?",
      options: ["Saya ingin yang menyegarkan", "Saya ingin yang menghangatkan"]
    },
    {
      id: "eatingStyle",
      question: "Bagaimana preferensi makan anda?",
      options: ["Saya makan sendiri", "Saya makan berdua", "Saya makan berkelompok", "Saya makan bersama keluarga"]
    },
    {
      id: "dessertPreference",
      question: "Apakah anda ingin dessert?",
      options: ["Ya", "Tidak"]
    }
  ]

  const handleAnswer = (answer: string) => {
    const currentQuestionId = questions[currentQuestion].id as keyof SurveyAnswers
    setAnswers(prev => ({
      ...prev,
      [currentQuestionId]: answer
    }))

    // Auto advance to next question
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1)
      }, 300)
    } else {
      // Show results after last question
      setTimeout(() => {
        setShowResults(true)
      }, 300)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const getRecommendations = () => {
    const recommendations = {
      food: [] as string[],
      drinks: [] as string[],
      desserts: [] as string[]
    }

    // Food recommendations based on answers
    if (answers.spicyPreference === "Ya" && answers.soupPreference === "Ya") {
      recommendations.food.push("Soto Makassar", "Coto Makassar", "Pallubasa")
    } else if (answers.spicyPreference === "Ya" && answers.soupPreference === "Tidak") {
      recommendations.food.push("Konro Bakar", "Ayam Taliwang")
    } else if (answers.spicyPreference === "Tidak" && answers.soupPreference === "Ya") {
      recommendations.food.push("Sup Ikan", "Bakso Makassar")
    } else if (answers.spicyPreference === "Sedang-sedang") {
      recommendations.food.push("Nasi Kuning Special", "Ayam Goreng Makassar")
    } else {
      recommendations.food.push("Nasi Kuning Special", "Grilled Fish")
    }

    // Drink recommendations
    if (answers.temperaturePreference === "Saya ingin yang menyegarkan") {
      recommendations.drinks.push("Es Teler Makassar", "Jus Markisa", "Es Kelapa Muda")
    } else {
      recommendations.drinks.push("Kopi Toraja", "Teh Talua", "Bajigur")
    }

    // Dessert recommendations
    if (answers.dessertPreference === "Ya") {
      if (answers.temperaturePreference === "Saya ingin yang menyegarkan") {
        recommendations.desserts.push("Es Pisang Ijo", "Es Pallu Butung", "Kolak Pisang Dingin")
      } else {
        recommendations.desserts.push("Pisang Epe", "Kolak Pisang Hangat", "Kue Putu")
      }
    }

    return recommendations
  }

  if (showResults) {
    const recommendations = getRecommendations()
    
    return (
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-card shadow-elegant border-none animate-scale-in">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    Rekomendasi Khusus Untuk Anda
                  </h3>
                  <p className="text-muted-foreground">
                    Berdasarkan preferensi Anda, berikut adalah rekomendasi terbaik dari Gastros Cafe
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-background/50 rounded-lg">
                    <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-4">Makanan</h4>
                    <div className="space-y-2">
                      {recommendations.food.map((food, index) => (
                        <div key={index} className="p-2 bg-primary/10 rounded text-sm">
                          {food}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center p-6 bg-background/50 rounded-lg">
                    <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-4">Minuman</h4>
                    <div className="space-y-2">
                      {recommendations.drinks.map((drink, index) => (
                        <div key={index} className="p-2 bg-primary/10 rounded text-sm">
                          {drink}
                        </div>
                      ))}
                    </div>
                  </div>

                  {recommendations.desserts.length > 0 && (
                    <div className="text-center p-6 bg-background/50 rounded-lg">
                      <IceCream className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h4 className="text-xl font-semibold mb-4">Dessert</h4>
                      <div className="space-y-2">
                        {recommendations.desserts.map((dessert, index) => (
                          <div key={index} className="p-2 bg-primary/10 rounded text-sm">
                            {dessert}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-center mt-8">
                  <button 
                    onClick={() => {
                      setCurrentQuestion(0)
                      setAnswers({
                        spicyPreference: "",
                        soupPreference: "",
                        temperaturePreference: "",
                        eatingStyle: "",
                        dessertPreference: ""
                      })
                      setShowResults(false)
                    }}
                    className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover:shadow-glow hover:scale-105 transform transition-all duration-300 font-semibold"
                  >
                    Coba Lagi
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Survei Preferensi Makanan
            </h2>
            <p className="text-muted-foreground animate-slide-up">
              Jawab 5 pertanyaan singkat untuk mendapatkan rekomendasi menu yang sempurna
            </p>
          </div>

          <Card className="bg-gradient-card shadow-elegant border-none animate-scale-in">
            <CardContent className="p-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-muted-foreground">
                    Pertanyaan {currentQuestion + 1} dari {questions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {questions[currentQuestion].question}
                </h3>

                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <Button
                      key={index}
                      variant="survey"
                      className="w-full p-4 text-left justify-start h-auto"
                      onClick={() => handleAnswer(option)}
                    >
                      <span className="text-sm">{option}</span>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Sebelumnya
                </Button>

                <div className="text-sm text-muted-foreground flex items-center">
                  Klik jawaban untuk melanjutkan
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default FoodSurvey