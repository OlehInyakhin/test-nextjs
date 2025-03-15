import { Button } from "@/shared/ui/button";

export default function Shop() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Shop</h1>
      <p className="text-lg mb-8">
        This is a dummy shop page. The contact page has been fully implemented according to the design.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={`product-${item}`} className="border rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-48"></div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
              <p className="text-gray-600 mb-2">$99.99</p>
              <Button
                variant="default"
                size="lg"
                className="w-full h-auto py-3 text-lg cursor-pointer"
              >
                Add to Cart
              </Button>
              <button ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

