import { Button } from "@/components/ui/button"

export const Hero = () => {
  return (
    <div className="py-40 flex items-center">
      <div className="container">
        <h1 className="text-4xl font-bold lg:text-6xl">Hero</h1>
        <p className="text-muted-foreground mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. A veritatis sed odio natus placeat. Quis corporis labore voluptatibus porro. 
          Sapiente at fugit eum natus ullam amet nobis unde deleniti corrupti?
        </p>
        <Button variant='default'>
          Contact
        </Button>
      </div>
    </div>
  )
}