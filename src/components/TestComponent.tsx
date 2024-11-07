import { Button } from './ui/button'
import { Input } from './ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'

export const TestComponent = () => {
  return (
    <div className="p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Test Components</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Test input..." />
          <Button>Test Button</Button>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-muted-foreground">
            If you can see this styled properly, everything is working!
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}