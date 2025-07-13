// pages/explore.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/header";
import Image from "next/image";

const mockTokens = [
  {
    id: "1",
    name: "نور الحكمة",
    description: "رمز NFT يعكس الحكمة الأنثوية وروح الحضارة.",
    image: "/nft1.png",
    price: "230",
    status: "للبيع",
  },
  {
    id: "2",
    name: "أمل",
    description: "رمز رقمي يعكس الأمل والتمكين.",
    image: "/nft2.png",
    price: "175",
    status: "مملوك",
  },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl font-bold font-space-grotesk mb-6">استكشاف الرموز</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockTokens.map((token) => (
            <Card key={token.id} className="hover:shadow-glow-primary transition-all duration-300">
              <CardHeader>
                <Image
                  src={token.image}
                  alt={token.name}
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </CardHeader>
              <CardContent className="space-y-2">
                <CardTitle className="text-xl font-semibold">{token.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{token.description}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold text-primary">{token.price} NAWAH</span>
                  <Button variant="secondary" size="sm">
                    {token.status === "للبيع" ? "شراء" : "تفاصيل"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
