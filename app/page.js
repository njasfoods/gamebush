import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Gamepad2, Upload, History, Users } from "lucide-react"
import { MemoryMatch } from "@/components/games/memorymatch/MemoryMatch"
import { WhackAMole } from "@/components/games/whackamole/WhackAMole"
import { TicTacToe } from "@/components/games/tictactoe/TicTacToe"


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Gamepad2 className="h-6 w-6" />
          <span className="sr-only">Game Corner</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Games
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Developers
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sign In
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Game Corner
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Play, create, and connect in our community-driven gaming platform. Discover new games, showcase your
                  creations, and track your gaming journey.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Start Playing</Button>
                <Button variant="outline">Upload Your Game</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Game Corner?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Gamepad2 className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Play Unique Games</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Discover and play a variety of games created by our community.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Upload className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Showcase Your Creations</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Upload and share your games with players worldwide.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <History className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Track Your Progress</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Keep a record of your gaming history and achievements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-2 p-6">
                  <Users className="h-12 w-12 mb-2" />
                  <h3 className="text-xl font-bold">Join the Community</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Connect with other gamers and developers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Featured Games
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <MemoryMatch />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <WhackAMole />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <TicTacToe />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Are You a Game Developer?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join our community of creators and share your games with players around the world.
                </p>
              </div>
              <Button size="lg">Sign Up as a Developer</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Community Says
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((testimonial) => (
                <Card key={testimonial}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar>
                        <AvatarImage alt="User avatar" src={`/placeholder.svg?height=40&width=40`} />
                        <AvatarFallback>U{testimonial}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold">User {testimonial}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Gamer / Developer</p>
                      </div>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400">
                      "Game Corner has been an amazing platform for discovering unique games and connecting with other
                      gaming enthusiasts. I've found some real gems here!"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Join the Fun?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Sign up now to start playing, tracking your progress, and connecting with our community.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Game Corner. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}