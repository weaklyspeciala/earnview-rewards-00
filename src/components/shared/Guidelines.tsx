import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Guidelines = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-primary">
          Platform Guidelines
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Fair Usage Policy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Watch ads naturally and attentively</li>
            <li>No automated tools or bots allowed</li>
            <li>One account per person</li>
            <li>Complete verification to earn rewards</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="font-semibold text-lg">Rewards System</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Earn points for watching complete ads</li>
            <li>Minimum payout threshold: 1000 points</li>
            <li>Rewards processed within 7 business days</li>
            <li>Multiple verification levels available</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};